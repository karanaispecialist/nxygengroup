import confetti from "canvas-confetti";

/**
 * Triggers a luxury gold & champagne confetti burst.
 * Perfect for prestigious contest submissions, auditions, and inquiries.
 */
export function triggerGoldConfetti() {
  if (typeof window === "undefined") return;

  const count = 100;
  const defaults = {
    origin: { y: 0.65 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-tier metallic luxury palette: Pure Gold, Champagne, Pale Gold, Diamond Silver
  const colors = ["#D4AF37", "#FFDF73", "#AA7C11", "#FFFFFF", "#F3E5AB"];

  fire(0.25, {
    spread: 30,
    startVelocity: 55,
    colors,
  });

  fire(0.2, {
    spread: 60,
    colors,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.1,
    colors,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors,
  });
}

/**
 * Continuous double-cannon fireworks celebration for Pageant Audition approvals.
 */
export function triggerAuditionCelebration() {
  if (typeof window === "undefined") return;

  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ["#D4AF37", "#FFFFFF", "#70B4FF", "#FFDF73"];

  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    // Left cannon
    confetti({
      particleCount,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.75 },
      colors,
      zIndex: 9999,
    });

    // Right cannon
    confetti({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.75 },
      colors,
      zIndex: 9999,
    });
  }, 250);
}

