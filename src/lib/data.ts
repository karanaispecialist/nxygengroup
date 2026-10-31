export interface VerticalInfo {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  isPrimary: boolean;
  heroImage: string;
  badges: string[];
  href: string;
  divisions: {
    name: string;
    code: string;
    description: string;
    features: string[];
    image: string;
  }[];
  highlights: {
    title: string;
    subtitle: string;
    description: string;
    dateOrVenue?: string;
    image: string;
  }[];
}

export const COMPANY_INFO = {
  name: "NXGEN PEOPLE",
  legalName: "NXGEN PEOPLE'S GROUP (NPG / NPS)",
  tagline: "Pioneering Fashion, Entertainment, Food & Education in Central India Since 1987",
  motto: "Portraying the Cultural Heritage of India, Nurturing Creative Talent, Elevating Human Potential.",
  founder: {
    name: "Vicky Da",
    title: "Founder & Group Chairman",
    experience: "4+ Decades of Creative Showbiz & Socio-Cultural Leadership",
    bio: "Head of NXGEN PEOPLE's Group for over 40 years, Vicky Da pioneered fashion pageants, model grooming, star nights, and socio-cultural movements in Central India starting in 1987. From organizing international sporting matches to producing nationwide beauty pageants and providing free education to underprivileged children, his visionary leadership bridges glamour with humanitarian impact.",
    image: "/images/felicitation-ceremony.jpeg"
  },
  headOffice: {
    address: "A - 10, Gulabi Nagar, 80 Feet Road, Bag Mugaliya, Bhopal, Madhya Pradesh, India",
    phones: [
      "+91 7805987151",
      "+91 9827217552",
      "+91 8770579372",
      "+91 9300532512",
      "+91 7415115915"
    ],
    emails: [
      "nxgenpeople@gmail.com",
      "vickyda17@gmail.com"
    ]
  },
  stats: [
    { label: "Years of Legacy", value: "40+", suffix: "Years" },
    { label: "Events & Pageants", value: "500+", suffix: "Shows" },
    { label: "Talents & Models Groomed", value: "10,000+", suffix: "Alumni" },
    { label: "Diverse Business Verticals", value: "3", suffix: "Sectors" }
  ]
};

export const VERTICALS: Record<string, VerticalInfo> = {
  fashion: {
    id: "fashion-entertainment",
    name: "Fashion & Entertainment",
    tagline: "Haute Couture, National Pageants, Cinema & High-Voltage Entertainment",
    shortDescription: "The flagship powerhouse of NXGEN PEOPLE since 1987. From organizing Miss India pageants and KVIC Khadi runways to grooming supermodels and producing cinema, we set the benchmark for Indian fashion and show business.",
    fullDescription: "NXGEN PEOPLE's Group is recognized across Central and North India as the undisputed trailblazer of high fashion, talent hunts, star nights, and entertainment extravaganzas. Headed by Vicky Da since 1987, the vertical spans high fashion apparel, film & TV production, destination tours, and premier national pageants that catapult young aspirants into national and international stardom.",
    iconName: "Sparkles",
    isPrimary: true,
    heroImage: "/images/hero-runway.jpeg",
    badges: ["Flagship Vertical", "Pioneers Since 1987", "National Pageant Organizers", "Bollywood & Glamour Gateway"],
    href: "/verticals/fashion-entertainment",
    divisions: [
      {
        name: "NXGEN APPARELS",
        code: "NA",
        description: "Bespoke designer wear, couture lines, and contemporary reimagining of traditional Indian textiles like Khadi, silk, and bridal couture.",
        features: [
          "Haute Couture & Modern Khadi Collections",
          "Indo-Western Fusion & Evening Gowns",
          "Runway & Bridal Ensembles",
          "Sustainable & Cultural Fabric Innovations"
        ],
        image: "/images/khadi-male-model.jpeg"
      },
      {
        name: "NXGEN FILMS & T.V. PRODUCTIONS",
        code: "NFTP",
        description: "Full-service media production house producing feature films, TV serials, digital shows, music videos, and talent casting.",
        features: [
          "Feature Films & Digital Web Series",
          "Music Video Direction & Line Production",
          "Talent Hunt & Casting Agency",
          "Alumni featured on leading TV serials & OTT"
        ],
        image: "/images/tv-serials-actors.jpeg"
      },
      {
        name: "NXCURSIONS (TOURS & TRAVELS)",
        code: "NXC",
        description: "Specialized lifestyle, fashion destination, and event logistics agency handling artist tours, overseas shoots, and cultural excursions.",
        features: [
          "Destination Pageants & Celebrity Travel",
          "Fashion Week Transport & Hospitality",
          "Educational & Youth Excursions",
          "VIP Artiste Logistics & Protocol"
        ],
        image: "/images/school-excursion.jpeg"
      }
    ],
    highlights: [
      {
        title: "NXGEN MISS INDIA 2026",
        subtitle: "The Most Prestigious National Pageant in India",
        description: "A premier multi-stage beauty pageant commencing with online & offline prelims across states, advancing 100 finalists to semi-finals, culminating in a spectacular Grand Finale and VIP After-Party.",
        dateOrVenue: "Venue: 5* Luxury Resort, Noida UP | Dates: 15th - 20th Nov 2026",
        image: "/images/pageant-grand-stage.jpeg"
      },
      {
        title: "THE KHADI BEAUTY PAGEANT & FASHION SHOW",
        subtitle: "'Threads of Freedom & Elegance' - In Association with KVIC",
        description: "A landmark celebration of Indian cultural heritage featuring Miss & Mr. Khadi, showcasing Khadi Casuals, Traditional Sarees & Sherwanis, Fusion Indo-Western Wear, and Designer Evening Gowns.",
        dateOrVenue: "Venue: Bhopal Haat Exhibition Ground | Annual Oct Festival",
        image: "/images/khadi-pageant-banner.jpeg"
      },
      {
        title: "HISTORIC SPORTING EXTRAVAGANZA",
        subtitle: "ODI Cricket Match: India vs. England (Women)",
        description: "Demonstrating unparalleled production capability, NXGEN successfully organized the prestigious International Women's ODI cricket match at Agra.",
        dateOrVenue: "Agra Stadium | International Sporting Event",
        image: "/images/odi-cricket-match.jpeg"
      },
      {
        title: "CELEBRITY STAR NIGHTS & REPUTED ALUMNI",
        subtitle: "4 Decades of Transforming Aspirants into Icons",
        description: "From hosting star nights with Udita Goswami at Jhansi Club to training winners of Gladrags Manhunt, Supermodel of India, Mr. India Best Physique, and Bollywood actors.",
        dateOrVenue: "Jhansi Club, Bhopal, Mumbai, Delhi",
        image: "/images/celebrity-udita.jpeg"
      }
    ]
  },
  food: {
    id: "food",
    name: "Food & Hospitality",
    tagline: "Gourmet Flavors, Cloud Kitchens & Trendsetting Cafés",
    shortDescription: "A curated culinary ecosystem featuring youth-favorite hangout spots, artisan café concepts, and modern cloud kitchen delivery networks crafted for discerning food lovers.",
    fullDescription: "NXGEN PEOPLE's Food vertical pairs culinary creativity with fast-casual hospitality. Anchored by the popular youth café 'Chilliflakes', the gourmet Suveez Big Bites café, and our multi-brand cloud kitchen network, we serve delectable comfort foods, artisanal burgers, stone-baked pizzas, and event catering.",
    iconName: "UtensilsCrossed",
    isPrimary: false,
    heroImage: "/images/chilliflakes-exterior.jpeg",
    badges: ["Secondary Vertical", "Café Network", "Cloud Kitchen Model", "Youth & Event Hangouts"],
    href: "/verticals/food",
    divisions: [
      {
        name: "NXGEN CAFESTRON & CLOUDKITCHEN",
        code: "NCCK",
        description: "State-of-the-art centralized cloud kitchens engineered for fast-delivery multi-brand menus, corporate bulk catering, and franchise expansion.",
        features: [
          "Multi-cuisine quick delivery operations",
          "Hygienic, automated prep & packaging",
          "Turnkey franchise opportunities",
          "VIP event & corporate catering packages"
        ],
        image: "/images/chilliflakes-cafe.jpeg"
      },
      {
        name: "SUVEEZ BIG BITES (CAFÉ)",
        code: "SBB",
        description: "Artisanal café delivering monster burgers, loaded fries, cheesy pizzas, milkshakes, and specialty espresso beverages.",
        features: [
          "Signature Gourmet 'Big Bites' burgers",
          "Custom stone-fired pizza varieties",
          "Youth & celebration party combos",
          "Warm, ambient aesthetic seating"
        ],
        image: "/images/chilliflakes-lounge.jpeg"
      },
      {
        name: "OUR CAFESTRON 'CHILLIFLAKES'",
        code: "CHILLI",
        description: "The beloved college and youth hub known for vibrant graffiti interiors, neon lighting, private birthday lounges, and flavorful spicy treats.",
        features: [
          "Trendy photo-worthy graffiti interiors",
          "Dedicated party & celebration private lounge",
          "Extensive mocktail, shake & coffee menu",
          "Affordable student-friendly pricing"
        ],
        image: "/images/chilliflakes-exterior.jpeg"
      }
    ],
    highlights: [
      {
        title: "CHILLIFLAKES PARTY & CELEBRATION LOUNGE",
        subtitle: "The Go-To Youth Hangout Destination in Town",
        description: "Custom party decor, ambient lighting, delicious shared platters, and personalized service make our café the top pick for birthdays and celebrations.",
        dateOrVenue: "Main Bag Mugaliya / Gulabi Nagar Hub",
        image: "/images/chilliflakes-lounge.jpeg"
      },
      {
        title: "SMART CLOUD KITCHEN EXPANSION",
        subtitle: "Delivering Flavor Across Central India",
        description: "Bringing high-efficiency, multi-brand delivery to doorstep gourmets with stringent hygiene, premium ingredients, and lightning-fast dispatch.",
        dateOrVenue: "Central India Delivery Network",
        image: "/images/chilliflakes-cafe.jpeg"
      }
    ]
  },
  education: {
    id: "education",
    name: "Education & Social Impact",
    tagline: "Empowering Minds, Fostering Inclusivity & Championing Community Health",
    shortDescription: "From the award-winning NXGEN Public School to the prestigious Fashion & Performing Arts Academy and free BPL education initiatives, we nurture future generations.",
    fullDescription: "Guided by our founding motto 'Portraying the Cultural Heritage of India & Nurturing Talent', NXGEN PEOPLE believes true success is measured by social upliftment. Our educational vertical spans K-9 schooling, nursery teacher training, digital literacy, and our NGO (NPSCES) which provides subsidized/free education for BPL children, leads massive tree plantation drives, and raises health awareness.",
    iconName: "GraduationCap",
    isPrimary: false,
    heroImage: "/images/school-building.jpeg",
    badges: ["Secondary Vertical", "Award-Winning Public School", "BPL Free Education", "NGO & Green Drives"],
    href: "/verticals/education",
    divisions: [
      {
        name: "NXGEN PUBLIC SCHOOL",
        code: "NPS",
        description: "Comprehensive English-medium school following the CBSE curriculum (P-Nursery to Class IX) with holistic academics, sports, and moral education.",
        features: [
          "CBSE Curriculum with Class P-Nur to Class IX",
          "Awarded Best in Cleanliness Drive by District Collector",
          "Dedicated free & subsidized seats for BPL children",
          "Modern smart classrooms & activity-based learning"
        ],
        image: "/images/school-building.jpeg"
      },
      {
        name: "NIIFPA (NXGEN INT'L INSTITUTE OF FASHION & PERFORMING ARTS)",
        code: "NIIFPA",
        description: "Premier finishing academy offering professional diplomas in runway modeling, theatre, acting, personality grooming, and fashion design.",
        features: [
          "Mentorship by industry veterans & celebrity guests",
          "Direct casting pathways into films, web series & pageants",
          "Ramp walk, poise, diction, and camera-facing skills",
          "Portfolio development and brand management"
        ],
        image: "/images/felicitation-ceremony.jpeg"
      },
      {
        name: "NPSCES NGO & SOCIAL INITIATIVES",
        code: "NPSCES",
        description: "NXGEN People Socio Cultural & Educational Society [NGO] driving environmental plantation drives, health awareness, and girl-child education.",
        features: [
          "Subsidized & Free Education for Below Poverty Line (BPL) kids",
          "Massive 'Save Environment' youth plantation drives",
          "Community health and AIDS awareness campaigns",
          "Socio-cultural festivals and national holiday tributes"
        ],
        image: "/images/plantation-drive.jpeg"
      },
      {
        name: "SPECIALIZED TRAINING ACADEMIES",
        code: "NINTT / NICE / NED",
        description: "Professional career vocational institutes equipping youth with in-demand certifications.",
        features: [
          "NINTT: Nursery Teachers Training Certification",
          "NICE: Institute of Computer Education & Digital Skills",
          "NED: NXGEN Educare (Career Counselling & Coaching)"
        ],
        image: "/images/independence-day.jpeg"
      }
    ],
    highlights: [
      {
        title: "DISTRICT COLLECTOR CLEANLINESS AWARD",
        subtitle: "Official State Recognition for Environmental Excellence",
        description: "NXGEN Public School was honored with the Best Cleanliness Award by the District Collector in recognition of outstanding hygiene and sanitation standards.",
        dateOrVenue: "Presented by Dist. Collector Sir",
        image: "/images/cleanliness-award.jpeg"
      },
      {
        title: "MASSIVE STUDENT TREE PLANTATION DRIVES",
        subtitle: "'Save Our Environment' Youth Green Movement",
        description: "Hundreds of school students participate in regular sapling plantation drives to cultivate ecological stewardship and contribute to city green cover.",
        dateOrVenue: "Annual Monsoon & Earth Week Drives",
        image: "/images/plantation-drive.jpeg"
      }
    ]
  }
};

export const PARTNERS = [
  { name: "KVIC (Khadi & Village Industries Commission)", category: "Government & Culture" },
  { name: "Hero Motors", category: "Corporate Sponsor" },
  { name: "NIIT", category: "Technology & Education" },
  { name: "Videocon", category: "Consumer Electronics" },
  { name: "SOM Group", category: "Conglomerate" },
  { name: "Extol", category: "Industry Associate" },
  { name: "Lady Rotarians", category: "Social Welfare" },
  { name: "Prayas Productions Mumbai", category: "Film Production" },
  { name: "Sara Creations New Delhi", category: "Event Management" },
  { name: "S.K. 2000 Vision Delhi", category: "Media Partner" },
  { name: "Dutta & Dutta Satellites", category: "Broadcast Partner" },
  { name: "Lutopia International Magazine", category: "Fashion Media" },
  { name: "Meragi's Events Bengaluru", category: "Luxury Weddings" },
  { name: "Tefla's Exp.", category: "Exhibitions & Conferences" }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Haute Couture Runway Showcase",
    category: "fashion",
    image: "/images/hero-runway.jpeg",
    description: "International fashion week runway with glamorous designer evening couture."
  },
  {
    id: "gal-2",
    title: "Modern Khadi Royal Ensembles",
    category: "fashion",
    image: "/images/khadi-male-model.jpeg",
    description: "Male supermodel in pristine handcrafted Khadi sherwani at FDCI / KVIC show."
  },
  {
    id: "gal-3",
    title: "NXGEN Miss India Grand Ballroom",
    category: "pageant",
    image: "/images/pageant-grand-stage.jpeg",
    description: "Opulent chandeliers and runway setup for the national pageant finals in Noida."
  },
  {
    id: "gal-4",
    title: "Celebrity Star Night with Udita Goswami",
    category: "celebrities",
    image: "/images/celebrity-udita.jpeg",
    description: "High-voltage star night at Jhansi Club featuring Bollywood actress Udita Goswami."
  },
  {
    id: "gal-5",
    title: "Miss Bhopal Pageant Award Ceremony",
    category: "celebrities",
    image: "/images/felicitation-rajiv.jpeg",
    description: "Renowned Bollywood actor Rajiv Verma felicitating winners of Miss Beautiful Bhopal."
  },
  {
    id: "gal-6",
    title: "Gladrags Manhunt & Supermodel Contest",
    category: "fashion",
    image: "/images/supermodel-manhunt.jpeg",
    description: "NXGEN groomed models securing titles in national supermodel pageants."
  },
  {
    id: "gal-7",
    title: "Dist. Collector Cleanliness Award",
    category: "education",
    image: "/images/cleanliness-award.jpeg",
    description: "District Collector presenting the coveted Cleanliness Trophy to NXGEN leadership."
  },
  {
    id: "gal-8",
    title: "NXGEN Public School Campus",
    category: "education",
    image: "/images/school-building.jpeg",
    description: "Modern educational facility offering CBSE education from Pre-Nursery to Class IX."
  },
  {
    id: "gal-9",
    title: "Student Plantation Drive",
    category: "education",
    image: "/images/plantation-drive.jpeg",
    description: "Students spearheading the 'Save Environment' green drive in Central India."
  },
  {
    id: "gal-10",
    title: "Cafestron Chilliflakes Exterior",
    category: "food",
    image: "/images/chilliflakes-exterior.jpeg",
    description: "The vibrant exterior of Chilliflakes Café - the favorite youth hangout spot."
  },
  {
    id: "gal-11",
    title: "Chilliflakes Party & Celebration Lounge",
    category: "food",
    image: "/images/chilliflakes-lounge.jpeg",
    description: "Celebration lounge decorated for memorable youth birthday parties."
  },
  {
    id: "gal-12",
    title: "International ODI Cricket Match - Agra",
    category: "celebrities",
    image: "/images/odi-cricket-match.jpeg",
    description: "Historic India vs England Women's ODI sporting extravaganza organized by NXGEN."
  }
];

export const TIMELINE = [
  {
    year: "1987",
    title: "Foundation & First Fashion Trends",
    description: "Vicky Da launches the movement, introducing organized fashion and healthy entertainment to Central India."
  },
  {
    year: "1990s",
    title: "City Boy, City Girl & Miss M.P. Decades",
    description: "A decade-long series of state-wide talent hunts establishing NXGEN as the premier launchpad for models and actors."
  },
  {
    year: "2000s",
    title: "Mega Pageants & International Sports",
    description: "Over 1,000 contestants compete in Miss Bhopal; organization of the India vs England Women's ODI match at Agra."
  },
  {
    year: "2010s",
    title: "KVIC Khadi 'Valiant' & Public School Launch",
    description: "Forging partnerships with Khadi and Village Industries Commission; establishing NXGEN Public School to educate BPL students."
  },
  {
    year: "2020s",
    title: "Culinary & Cloud Kitchen Expansion",
    description: "Launching Cafestron Chilliflakes, Suveez Big Bites, and modern cloud kitchen operations alongside digital media productions."
  },
  {
    year: "2026",
    title: "NXGEN Miss India 2026 & Digital Era",
    description: "Unveiling the nationwide NXGEN Miss India pageant at Noida 5* resort and scaling modern Khadi couture nationwide."
  }
];

