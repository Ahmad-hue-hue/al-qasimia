# ⚠️ READ THIS ENTIRE FILE BEFORE WRITING ANY CODE

This document is the single source of truth for building the **Al Qasimia Tahfidhul Qur'an** school website. Do not skip sections. Do not start coding before completing the mandatory skill-reading step below.

---

## 🎯 Project Overview

| Field | Detail |
|---|---|
| Project Name | Al Qasimia Tahfidhul Qur'an — Official Website |
| Client Type | Islamic boarding school (Tahfidh/Hifdh Qur'an institute) |
| Location | Nzuguni, Dodoma, Tanzania |
| Primary Language | Swahili (with light English/Arabic accents where natural) |
| Primary Goal | Recruit students (bweni & kutwa), build trust, drive WhatsApp/phone inquiries and registrations |
| Design Direction | Modern, warm, elegant — gold/cream Islamic aesthetic, NOT a generic corporate template |

---

## 📁 Project Structure

```
al-qasimia/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                # Home
│   │   ├── kuhusu/page.tsx         # About (Dira, Dhamira, Kaulimbiu)
│   │   ├── mafunzo/page.tsx        # Programs/Courses
│   │   ├── udahili/page.tsx        # Admission
│   │   ├── picha/page.tsx          # Gallery
│   │   └── mawasiliano/page.tsx    # Contact
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                         # shadcn components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── program-card.tsx
│   ├── testimonial.tsx
│   ├── whatsapp-float-button.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── logo.png
│   └── images/
└── AGENT.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Runtime / Package Manager | Bun |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Animation (scroll/reveal) | GSAP |
| Animation (UI transitions) | Framer Motion |
| Theme | Dark mode + Light mode (next-themes) |
| Icons | Phosphor Icons (@phosphor-icons/react) — use the "duotone" or "fill" weight for a distinctive, modern feel, not the default thin outline everyone uses |
| 3D / Visual Depth | Three.js (via @react-three/fiber + @react-three/drei) — used sparingly for hero-section depth/ambience (e.g. subtle floating particles, light rays, or a soft 3D Qur'an/geometric motif), not as a gimmick on every page |
| Fonts | A clean sans-serif for body + an elegant serif/display font for headings (Arabic-feel accents allowed for headers only) |

---

## 📖 MANDATORY: Read Skills Before Coding (in this order)

1. Read the `frontend-design` skill fully before writing a single component — this project must NOT look like a default shadcn template. Study its guidance on typography, spacing, and intentional visual choices before touching layout code.
2. Only after step 1, begin scaffolding the Next.js project with Bun.

**Do not write UI code until step 1 is complete.**

---

## 🏫 School Content (source of truth — do not invent facts not listed here)

**School name:** Al Qasimia Tahfidhul Qur'an
**Tagline:** Hifadhi Qur'an Kirahisi
**Motto:** Al-Qasimia, Nuru ya Maisha Yako ("Al-Qasimia, the light of your life")

**Logo/branding:** Circular gold-and-cream emblem featuring a mosque silhouette with radiating light rays, Arabic calligraphy ("Madrasa al-Qasimiyyah li-Tahfīdh al-Qur'an") wrapped around the border, flanked by open Qur'an stands on stands. Primary brand colors: **gold/amber (#D4AF37–#C9922E range)**, cream/off-white background, black text for body copy, with a warm orange accent used for headings (matching the poster's orange headline color, approx. #E08B2E).

**About / Description:**
Al Qasimia Tahfidhul Qur'an is a full boarding (bweni) and day (kutwa) institute for young men, dedicated to Qur'an memorization (hifdh) and raising youth in the light of the Qur'an and sound Islamic character.

**Vision/Mission (synthesize from poster language — do not overclaim beyond this):**
- Mission: To preserve and pass on the Qur'an by training youth in complete memorization, correct tajwid, and Islamic discipline, within a safe and structured boarding environment.
- Vision: A generation of huffadh (Qur'an memorizers) grounded in sound Islamic character, ready to carry the Qur'an into their communities.
- Motto: "Al-Qasimia, Nuru ya Maisha Yako"

**Programs offered:**
1. Hifdhi kamili ya Qur'an Tukufu (Full Qur'an memorization)
2. Tajwid sahihi kwa njia nyepesi na za kisasa (Correct tajwid, taught simply and using modern methods)
3. Malezi, nidhamu na mafunzo ya Kiislamu (Islamic character, discipline, and upbringing)
4. Special 6-month intensive Hifdh course for youth who have completed Form Four (kidato cha nne) — low fees, available as boarding or day
5. **Promotional offer:** Arabic language classes taught completely free (OFA: Lugha ya Kiarabu itafundishwa bure kabisa) — highlight this as a callout/badge on the homepage

**Services:**
- Full boarding — meals, accommodation, and study (kula, kulala, kusoma)
- Experienced teachers who love and are devoted to the Qur'an
- Calm, safe, disciplined environment for students

**Admission info:**
- Registration is ongoing (Usajili unaendelea)
- Special intake: 6-month course begins for Form Four graduates, boarding or day option, affordable fees
- Note to display: "Bila kusahau, Al Qasimia haimzuii mwanafunzi kuendelea na masomo yake shuleni" (Al Qasimia does not prevent a student from continuing their regular schooling)

**Contact details:**
- Phone/WhatsApp: +255 674 248 190, +255 719 158 880, +255 716 200 414
- Location: Nzuguni, Dodoma, Tanzania
- Google Maps: embed a map pin for Nzuguni, Dodoma (exact pin to be confirmed by client — use area-level pin as placeholder)

**Social media:**
- Instagram: Al Qasimia Tahfidhul Qur'an
- Facebook: Al Qasimia Tahfidhul Qur'an

**WhatsApp inquiries:** Use +255 719 158 880 (or first available number) as the floating WhatsApp button target, pre-filled message: "Assalamu Alaykum, ningependa taarifa zaidi kuhusu Al Qasimia Tahfidhul Qur'an."

**Testimonial / trust element:**
Feature this hadith prominently (e.g., in a styled quote section, not as a fake testimonial):
> "Hakika Allah ana watu Wake maalumu miongoni mwa watu." Wakasema: "Ni nani hao, ee Mtume wa Allah?" Akasema: "Ni watu wa Qur'an — wao ndio watu wa Allah na wateuliwa Wake."

**Photos:** Use placeholder image slots for: school building/mosque exterior, boarding rooms, classroom/study sessions, students reciting Qur'an — client will supply real photos to replace placeholders (do NOT use stock photos of unrelated mosques as final content; mark clearly as PLACEHOLDER).

**Launch deadline:** [Ahmad — insert agreed deadline here before sending to agent]

---

## 🚦 Build Order (follow phases in sequence)

**Phase 1 — Setup**
1. Scaffold Next.js + Bun project, install Tailwind, shadcn/ui, Framer Motion, GSAP, next-themes, @phosphor-icons/react, @react-three/fiber, @react-three/drei, three
2. Set up dark/light theme toggle and base color tokens (gold/amber + cream + black)

**Phase 2 — Layout & Navigation**
3. Build Navbar (logo + nav links: Nyumbani, Kuhusu, Mafunzo, Udahili, Picha, Mawasiliano) and Footer (contact, social links, WhatsApp)

**Phase 3 — Pages**
4. Home: Hero (school name, tagline, CTA to WhatsApp/Udahili) with a subtle Three.js background element for depth (e.g. soft floating light particles or ambient geometric motif — keep performant, not distracting), Arabic-free-offer badge, Programs preview, Why Us / Services, Hadith quote section, CTA banner
5. Kuhusu (About): description, vision, mission, motto
6. Mafunzo (Programs): all 4 program items as cards, 6-month course highlighted separately with dates/fees note
7. Udahili (Admission): registration status, requirements, boarding vs. day option, contact CTA
8. Picha (Gallery): image grid with placeholder marking
9. Mawasiliano (Contact): phone numbers, WhatsApp button, Google Maps embed, social links, contact form (optional)

**Phase 4 — Polish**
10. Add GSAP scroll-reveal animations on section entries, Framer Motion micro-interactions on buttons/cards
11. Mobile responsiveness pass
12. Add floating WhatsApp button (persistent, all pages)

---

## ❌ NEVER / ✅ ALWAYS

- ❌ NEVER use generic default shadcn styling without customizing colors/typography to match the gold/cream Islamic branding
- ❌ NEVER invent statistics, student numbers, or achievements not listed in this document
- ❌ NEVER use stock mosque/Islamic images as final gallery content — use clearly labeled placeholders
- ❌ NEVER hardcode a single WhatsApp number in multiple places — use one config constant
- ❌ NEVER use lucide-react icons — use Phosphor Icons only
- ❌ NEVER let the Three.js scene block or slow down page load — lazy-load it and keep it decorative only, never load-bearing for content
- ✅ ALWAYS keep all visible site copy in Swahili
- ✅ ALWAYS make the WhatsApp button and phone numbers one tap/click to act on mobile
- ✅ ALWAYS support both dark and light mode across every page
- ✅ ALWAYS keep the hadith quote visually distinct (not styled like a marketing testimonial)

---

## 📬 Submission Checklist

- [ ] All 6 pages built and linked in navigation
- [ ] Dark/light mode toggle works on every page
- [ ] WhatsApp floating button present and functional on all pages
- [ ] All 3 phone numbers correctly listed on Mawasiliano page
- [ ] Google Maps embed present (placeholder pin acceptable pending exact coordinates)
- [ ] Instagram & Facebook links added
- [ ] Free Arabic language offer visibly promoted on homepage
- [ ] Hadith quote section styled distinctly
- [ ] Gallery images marked as placeholders, easy to swap
- [ ] Mobile responsive on all breakpoints
- [ ] GSAP + Framer Motion animations present but not excessive/distracting
