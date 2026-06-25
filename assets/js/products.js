/** Public product catalog — only verified links and statuses. */
export const APPS = [
  {
    name: "Renewal Hub",
    tagline: {
      en: "Subscriptions, warranties, and document renewals in one place.",
      tr: "Abonelikler, garantiler ve belge yenilemeleri tek yerde.",
    },
    icon: "📋",
    iconBg: "linear-gradient(135deg, #6366f1, #4f46e5)",
    category: { en: "Lifestyle", tr: "Yaşam" },
    status: "soon",
    tags: ["iOS", "Android"],
    links: [],
  },
  {
    name: "Pomovane",
    tagline: {
      en: "One task. One timer. Stay in flow.",
      tr: "Tek görev. Tek zamanlayıcı. Akışta kal.",
    },
    icon: "🍅",
    iconSrc: "/assets/icons/pomovane.svg",
    iconBg: "linear-gradient(135deg, #ef4444, #dc2626)",
    category: { en: "Productivity", tr: "Üretkenlik" },
    status: "soon",
    tags: ["iOS", "Android", "Pomodoro"],
    links: [],
  },
  {
    name: "Creator Studio",
    tagline: {
      en: "Plan a week of content in 10 minutes.",
      tr: "10 dakikada bir haftalık içerik planı.",
    },
    icon: "✨",
    iconBg: "linear-gradient(135deg, #ec4899, #db2777)",
    category: { en: "Content", tr: "İçerik" },
    status: "soon",
    tags: ["iOS", "Android"],
    links: [],
  },
  {
    name: "Interview Prep AI",
    tagline: {
      en: "Practice the interview before the interview.",
      tr: "Mülakat gününden önce mülakat pratiği yap.",
    },
    icon: "💼",
    iconBg: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    category: { en: "Career", tr: "Kariyer" },
    status: "soon",
    tags: ["iOS", "Android"],
    links: [],
  },
  {
    name: "Quit Tracker",
    tagline: {
      en: "Your streak. Your savings. One day at a time.",
      tr: "Serin. Birikimin. Her gün bir adım.",
    },
    icon: "🌱",
    iconBg: "linear-gradient(135deg, #22c55e, #16a34a)",
    category: { en: "Health", tr: "Sağlık" },
    status: "soon",
    tags: ["iOS", "Android"],
    links: [],
  },
  {
    name: "Plant Care",
    tagline: {
      en: "Never kill another plant.",
      tr: "Bir daha hiç bitki öldürme.",
    },
    icon: "🪴",
    iconBg: "linear-gradient(135deg, #84cc16, #65a30d)",
    category: { en: "Lifestyle", tr: "Yaşam" },
    status: "soon",
    tags: ["iOS", "Android"],
    links: [],
  },
]

export const WEB = [
  {
    name: "AIWaitIndex",
    tagline: {
      en: "Compare AI wait-state ad platforms — honest data and earnings estimates.",
      tr: "AI bekleme süresi reklam platformlarını karşılaştır — şeffaf veri ve kazanç tahminleri.",
    },
    icon: "📊",
    iconSrc: "/assets/icons/aiwaitindex.svg",
    category: { en: "Research", tr: "Araştırma" },
    status: "live",
    tags: ["Web", "AI"],
    links: [
      {
        label: { en: "Visit site", tr: "Siteyi ziyaret et" },
        href: "https://aiwaitindex.com",
        primary: true,
      },
    ],
  },
  {
    name: "Glitchwatch",
    tagline: {
      en: "CI and deploy failures in one inbox — GitHub webhook, web and iOS.",
      tr: "CI ve deploy hataları tek gelen kutusunda — GitHub webhook, web ve iOS.",
    },
    icon: "📡",
    iconSrc: "/assets/icons/glitchwatch-128.png",
    category: { en: "Developer tools", tr: "Geliştirici araçları" },
    status: "live",
    tags: ["Web", "iOS", "GitHub"],
    links: [
      {
        label: { en: "Visit site", tr: "Siteyi ziyaret et" },
        href: "https://fleet-manager-roan.vercel.app",
        primary: true,
      },
    ],
  },
]

export const GAMES = [
  {
    name: "AXIS 6",
    tagline: {
      en: "Six rounds. One winner. Strategy on the board.",
      tr: "Altı tur. Bir kazanan. Tahtada strateji.",
    },
    icon: "🎯",
    iconSrc: "/assets/icons/axis6-128.png",
    iconBg: "linear-gradient(135deg, #f59e0b, #d97706)",
    category: { en: "Strategy", tr: "Strateji" },
    status: "dev",
    tags: ["iOS", "Android"],
    links: [
      {
        label: { en: "Privacy policy", tr: "Gizlilik politikası" },
        href: "/axis6-privacy/",
        primary: true,
      },
    ],
  },
  {
    name: "Detonaut",
    tagline: {
      en: "Physics-based blast puzzle — in active development.",
      tr: "Fizik tabanlı patlama bulmacası — aktif geliştirme.",
    },
    icon: "💥",
    iconBg: "linear-gradient(135deg, #a855f7, #7c3aed)",
    category: { en: "Puzzle", tr: "Bulmaca" },
    status: "dev",
    tags: ["Unity", "2D"],
    links: [],
  },
]
