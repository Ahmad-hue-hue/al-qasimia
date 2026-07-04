export const siteConfig = {
  name: "Al Qasimia Tahfidhul Qur'an",
  tagline: "Hifadhi Qur'an Kirahisi",
  motto: "Al-Qasimia, Nuru ya Maisha Yako",
  logo: {
    src: "/logo.jpg",
    alt: "Al Qasimia Tahfidhul Qur'an — nembo ya shule",
  },
  location: "Nzuguni, Dodoma, Tanzania",
  whatsapp: {
    number: "255719158880",
    message:
      "Assalamu Alaykum, ningependa taarifa zaidi kuhusu Al Qasimia Tahfidhul Qur'an.",
    href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  phones: [
    { label: "Simu / WhatsApp", number: "+255 674 248 190", tel: "+255674248190" },
    { label: "Simu / WhatsApp", number: "+255 719 158 880", tel: "+255719158880" },
    { label: "Simu / WhatsApp", number: "+255 716 200 414", tel: "+255716200414" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    instagramLabel: "Al Qasimia Tahfidhul Qur'an",
    facebookLabel: "Al Qasimia Tahfidhul Qur'an",
  },
  nav: [
    { href: "/", label: "Nyumbani" },
    { href: "/kuhusu", label: "Kuhusu" },
    { href: "/mafunzo", label: "Mafunzo" },
    { href: "/udahili", label: "Udahili" },
    { href: "/mawasiliano", label: "Mawasiliano" },
  ],
} as const;

export const programs = [
  {
    title: "Hifdhi kamili ya Qur'an Tukufu",
    description:
      "Mwanafunzi anafundishwa kuhifadhi Qur'an kamili kwa njia ya taratibu, tajwid sahihi, na ufuatiliaji wa kila sura.",
    icon: "book-open" as const,
  },
  {
    title: "Tajwid sahihi kwa njia nyepesi",
    description:
      "Mbinu za kisasa na rahisi za kufundisha tajwid — ili kila mwanafunzi asome Qur'an kwa usahihi.",
    icon: "microphone" as const,
  },
  {
    title: "Malezi, nidhamu na mafunzo ya Kiislamu",
    description:
      "Mazingira salama na yenye nidhamu ya Kiislamu — kulea kizazi chenye tabia njema na imani thabiti.",
    icon: "heart" as const,
  },
  {
    title: "Kozi ya miezi 6 — baada ya Kidato cha Nne",
    description:
      "Kozi maalum ya Hifdh kwa vijana waliomaliza Form Four. Ada nafuu. Bweni au kutwa.",
    icon: "graduation-cap" as const,
    highlight: true,
  },
];

export const services = [
  "Bweni kamili — kula, kulala, na kusoma",
  "Walimu wenye uzoefu na upendo wa Qur'an",
  "Mazingira tulivu, salama, na yenye nidhamu",
];

export const hadithQuote = {
  text: "Hakika Allah ana watu Wake maalumu miongoni mwa watu. Wakasema: \"Ni nani hao, ee Mtume wa Allah?\" Akasema: \"Ni watu wa Qur'an — wao ndio watu wa Allah na wateuliwa Wake.\"",
  source: "Hadith",
};
