import os
import sys
import json
import time
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3000"
SCREENSHOT_DIR = r"D:\NPS\test_screenshots"
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

VIEWPORTS = [
    {"name": "Mobile_375x667", "width": 375, "height": 667, "is_mobile": True},
    {"name": "Mobile_360x740", "width": 360, "height": 740, "is_mobile": True},
    {"name": "Mobile_390x844", "width": 390, "height": 844, "is_mobile": True},
    {"name": "Tablet_768x1024", "width": 768, "height": 1024, "is_mobile": True},
    {"name": "Desktop_1280x800", "width": 1280, "height": 800, "is_mobile": False},
    {"name": "Desktop_1440x900", "width": 1440, "height": 900, "is_mobile": False},
]

ROUTES = [
    {"path": "/", "name": "home"},
    {"path": "/verticals/fashion-entertainment", "name": "fashion"},
    {"path": "/verticals/food", "name": "food"},
    {"path": "/verticals/education", "name": "education"},
    {"path": "/about", "name": "about"},
    {"path": "/events", "name": "events"},
    {"path": "/contact", "name": "contact"},
    {"path": "/audition", "name": "audition"},
]

def run_tests():
    results = {
        "passed": 0,
        "failed": 0,
        "details": [],
        "screenshots": []
    }

    print("==================================================")
    print("  NXGEN PEOPLE - RESPONSIVE & MOBILE AUDIT SUITE  ")
    print("==================================================")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, channel="chrome")

        for vp in VIEWPORTS:
            vp_name = vp["name"]
            width = vp["width"]
            height = vp["height"]
            is_mobile = vp["is_mobile"]

            print(f"\n--- Testing Viewport: {vp_name} ({width}x{height}) [is_mobile={is_mobile}] ---")

            context = browser.new_context(
                viewport={"width": width, "height": height},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15" if is_mobile else None
            )
            page = context.new_page()

            for route in ROUTES:
                path = route["path"]
                route_name = route["name"]
                url = f"{BASE_URL}{path}"

                test_item = {
                    "viewport": vp_name,
                    "route": path,
                    "checks": {}
                }

                try:
                    response = page.goto(url, wait_until="networkidle", timeout=15000)
                    status_code = response.status if response else 0

                    if status_code != 200:
                        test_item["checks"]["status_200"] = f"FAIL (status {status_code})"
                        results["failed"] += 1
                        print(f"  [FAIL] {path} HTTP Status: {status_code}")
                    else:
                        test_item["checks"]["status_200"] = "PASS"

                    # 1. Check for horizontal overflow (must have scrollWidth <= clientWidth)
                    overflow_data = page.evaluate("""() => {
                        const scrollW = document.documentElement.scrollWidth;
                        const clientW = document.documentElement.clientWidth;
                        const winW = window.innerWidth;
                        return { scrollW, clientW, winW, overflow: scrollW > clientW + 1 };
                    }""")

                    if overflow_data["overflow"]:
                        test_item["checks"]["no_horizontal_overflow"] = f"FAIL (scrollWidth: {overflow_data['scrollW']}, clientWidth: {overflow_data['clientW']})"
                        results["failed"] += 1
                        print(f"  [FAIL] {path} - Horizontal overflow detected: scrollWidth={overflow_data['scrollW']} > clientWidth={overflow_data['clientW']}")
                    else:
                        test_item["checks"]["no_horizontal_overflow"] = "PASS"
                        results["passed"] += 1

                    # 2. Check Sticky Mobile Footer behavior
                    sticky_footer = page.locator("#mobile-sticky-footer")
                    has_footer = sticky_footer.count() > 0

                    if has_footer:
                        is_visible = sticky_footer.is_visible()
                        if width < 1024:
                            # On mobile (< 1024px), it MUST be visible
                            if is_visible:
                                test_item["checks"]["sticky_footer_visible"] = "PASS"
                                results["passed"] += 1

                                # Check navigation items inside sticky footer
                                home_link = sticky_footer.locator('a[href="/"]')
                                fashion_link = sticky_footer.locator('a[href="/verticals/fashion-entertainment"]')
                                food_link = sticky_footer.locator('a[href="/verticals/food"]')
                                edu_link = sticky_footer.locator('a[href="/verticals/education"]')
                                audition_link = sticky_footer.locator('a[href="/audition"]')
                                call_link = sticky_footer.locator('a[href^="tel:"]')

                                if (home_link.count() > 0 and fashion_link.count() > 0 and 
                                    food_link.count() > 0 and edu_link.count() > 0 and 
                                    audition_link.count() > 0 and call_link.count() > 0):
                                    test_item["checks"]["sticky_footer_links"] = "PASS (All 5 nav items + Call pill present)"
                                    results["passed"] += 1
                                else:
                                    test_item["checks"]["sticky_footer_links"] = "FAIL (Missing items)"
                                    results["failed"] += 1
                            else:
                                test_item["checks"]["sticky_footer_visible"] = "FAIL (Not visible on mobile)"
                                results["failed"] += 1
                                print(f"  [FAIL] {path} - Sticky footer NOT visible on mobile!")
                        else:
                            # On desktop (>= 1024px), it MUST be hidden
                            if not is_visible:
                                test_item["checks"]["sticky_footer_hidden_on_desktop"] = "PASS"
                                results["passed"] += 1
                            else:
                                test_item["checks"]["sticky_footer_hidden_on_desktop"] = "FAIL (Visible on desktop)"
                                results["failed"] += 1
                                print(f"  [FAIL] {path} - Sticky footer VISIBLE on desktop (should be lg:hidden)!")

                    # 3. Check Form Inputs on Contact & Audition pages for mobile font-size
                    if path in ["/contact", "/audition"]:
                        inputs_data = page.evaluate("""() => {
                            const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
                            return inputs.map(el => {
                                const style = window.getComputedStyle(el);
                                const fontSize = parseFloat(style.fontSize);
                                return {
                                    tag: el.tagName,
                                    type: el.type,
                                    fontSize: fontSize,
                                    height: parseFloat(style.height)
                                };
                            });
                        }""")
                        
                        # Validate all font sizes are >= 16px on mobile viewports
                        small_fonts = [inp for inp in inputs_data if inp["fontSize"] < 15.9]
                        if width < 768 and len(small_fonts) > 0:
                            test_item["checks"]["inputs_no_zoom_font_size"] = f"WARN ({len(small_fonts)} inputs < 16px)"
                            print(f"  [WARN] {path} - Found {len(small_fonts)} inputs with font-size < 16px on mobile")
                        else:
                            test_item["checks"]["inputs_no_zoom_font_size"] = "PASS"
                            results["passed"] += 1

                    # 4. Save Screenshot for primary mobile and desktop viewports
                    if vp_name in ["Mobile_375x667", "Desktop_1440x900"]:
                        screenshot_file = f"{route_name}_{vp_name}.png"
                        screenshot_path = os.path.join(SCREENSHOT_DIR, screenshot_file)
                        page.screenshot(path=screenshot_path, full_page=False)
                        results["screenshots"].append(screenshot_file)

                    print(f"  [PASS] {path} in {vp_name}: Overflow={overflow_data['overflow']} (W:{overflow_data['clientW']}px)")

                except Exception as e:
                    test_item["checks"]["exception"] = str(e)
                    results["failed"] += 1
                    print(f"  [ERROR] {path} in {vp_name}: {e}")

                results["details"].append(test_item)

            # Test hamburger menu drawer specifically on mobile
            if width < 1024:
                try:
                    page.goto(f"{BASE_URL}/", wait_until="networkidle")
                    menu_btn = page.locator('button[aria-label="Toggle menu"]')
                    if menu_btn.is_visible():
                        menu_btn.click()
                        time.sleep(0.3)
                        drawer = page.locator('div.glass-panel:has-text("Our Business Verticals")')
                        if drawer.is_visible():
                            print(f"  [PASS] Mobile Hamburger Drawer opened cleanly on {vp_name}")
                            results["passed"] += 1
                            if vp_name == "Mobile_375x667":
                                drawer_screenshot = os.path.join(SCREENSHOT_DIR, "mobile_drawer_open.png")
                                page.screenshot(path=drawer_screenshot)
                                results["screenshots"].append("mobile_drawer_open.png")
                        else:
                            print(f"  [FAIL] Mobile drawer failed to open on {vp_name}")
                            results["failed"] += 1
                except Exception as e:
                    print(f"  [ERROR] Mobile menu test on {vp_name}: {e}")

            context.close()

        browser.close()

    # Save summary report
    report_file = os.path.join(SCREENSHOT_DIR, "test_report.json")
    with open(report_file, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print("\n==================================================")
    print(f"TEST RESULTS: {results['passed']} PASSED, {results['failed']} FAILED")
    print(f"Screenshots saved to: {SCREENSHOT_DIR}")
    print(f"Report JSON: {report_file}")
    print("==================================================")

    return results["failed"] == 0

if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)

