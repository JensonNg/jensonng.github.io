import alfredCover from "../images/work/alfred-cover.webp";
import alfredColour from "../images/work/alfred-colour.webp";
import alfredType from "../images/work/alfred-type.webp";
import alfredLogo from "../images/work/alfred-logo.webp";
import alfredPatterns from "../images/work/alfred-patterns.webp";
import alfredIcons from "../images/work/alfred-icons.webp";
import bachableCover from "../images/work/bachable-cover.webp";
import bachableVoice from "../images/work/bachable-voice.webp";
import bachableLogo from "../images/work/bachable-logo.webp";
import bachableColour from "../images/work/bachable-colour.webp";
import bachableType from "../images/work/bachable-type.webp";
import bachableShape from "../images/work/bachable-shape.webp";
import rfslCover from "../images/work/rfsl-cover.webp";
import rfslRollup from "../images/work/rfsl-rollup.webp";
import rfslFair from "../images/work/rfsl-fair.webp";
import rfslFlyer1 from "../images/work/rfsl-flyer-1.webp";
import rfslFlyer2 from "../images/work/rfsl-flyer-2.webp";
import meltdCover from "../images/work/meltd-cover.webp";
import meltdStoryIntro from "../images/work/meltd-story-intro.webp";
import meltdStoryPopups from "../images/work/meltd-story-popups.webp";
import meltdFeed from "../images/work/meltd-feed.webp";
import sowiloCover from "../images/work/sowilo-cover.webp";
import sowiloLogo from "../images/work/sowilo-logo.webp";
import sowiloPalette from "../images/work/sowilo-palette.webp";
import sowiloSymbolism from "../images/work/sowilo-symbolism.webp";
import sowiloType from "../images/work/sowilo-type.webp";

/**
 * Case studies, shown at /work/<slug>, on the Projects page and in Selected work.
 *
 * Every case study follows the same template, so visitors learn it once:
 * at a glance, results, challenge, approach, results in words, what I learned,
 * then testimonials, related reading and the next case study.
 *
 * To add one: copy an entry and give it a unique `slug`.
 * - Drafts live in the `drafts` list and only show in `npm run dev`, with a
 *   banner. The production build drops them completely: they are not in the
 *   live site, the JavaScript, the sitemap or llms.txt. To publish one, move it
 *   to the `published` list and change `status` to "published".
 * - Text supports **bold**, [links](https://...) and [[notes to self]].
 *   [[Notes]] show as red "To fill in" marks: remove them all before publishing.
 * - Credit partners and agencies in `credits`: say what they made and what you did.
 * - `gallery` takes images you have the right to show (export them from your
 *   own files, not from someone else's website).
 */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  status: "published" | "draft";
  /** ISO date of the last meaningful update, for the sitemap */
  updated: string;
  client: string;
  /** Short label for cards and the eyebrow, e.g. "Brand identity & launch" */
  category: string;
  /** H1 of the case study page */
  title: string;
  /** One or two sentences under the title; also the page description */
  summary: string;
  /** One line with the headline result, for cards */
  cardResult: string;
  cover?: string;
  coverAlt?: string;
  /** CSS object-position for cropped cover thumbnails, e.g. "left center" */
  coverPosition?: string;
  /** Fallback tile when there is no cover image */
  brand: { initials: string; color: string; bgFrom: string; bgTo: string };
  /** The "At a glance" panel, e.g. Role, Partner, Timeline, Scope */
  facts: { label: string; value: string; href?: string }[];
  metrics: CaseStudyMetric[];
  challenge: string[];
  approach: { title: string; text: string; points?: string[] }[];
  results: string[];
  learnings: string[];
  /** Who else made this, e.g. the agency behind the visual identity */
  credits?: string;
  /** `wide` images span the full width of the gallery */
  gallery?: { src: string; alt: string; caption?: string; wide?: boolean }[];
  /** 2 (default) or 3 columns on desktop; use 3 for tall, phone-shaped images */
  galleryColumns?: 2 | 3;
  /** ids from src/data/testimonials.ts */
  testimonials: string[];
  /** slugs from src/data/blogPosts.ts */
  relatedPosts: string[];
  link?: { label: string; href: string };
}

const published: CaseStudy[] = [
  {
    slug: "alfred-for-banks",
    status: "published",
    updated: "2026-11-22",
    client: "Mitigram",
    category: "Brand identity & AI launch",
    title: "Alfred for Banks: giving an AI agent a face",
    summary:
      "How Mitigram launched Alfred, an AI agent for trade finance, with a visual identity banks can recognise and a launch story they can understand.",
    cardResult: "30+ SQLs and two banks onboarded since June 2026",
    cover: alfredCover,
    coverAlt: "The Alfred logo above the words Design System, on Aztec Green with a teal particle pattern",
    coverPosition: "left center",
    brand: { initials: "A", color: "#49EED3", bgFrom: "#0E1E1E", bgTo: "#174545" },
    facts: [
      { label: "Client", value: "Mitigram, B2B trade finance platform" },
      { label: "My role", value: "Marketing Manager, co-owner of the launch" },
      { label: "Identity partner", value: "Souk Agency", href: "https://www.soukagency.com/cases/alfred" },
      { label: "Audience", value: "Banks and their trade finance teams" },
      { label: "Year", value: "2026" },
      { label: "Scope", value: "Visual identity, design system, launch story, campaigns" },
    ],
    metrics: [
      { value: "30+", label: "Sales-qualified leads since June 2026" },
      { value: "2", label: "Banks onboarded" },
    ],
    challenge: [
      "Mitigram was launching Alfred, an AI agent that turns banks' manual, email-based trade finance workflows into an automated, agentic process. It needed a visual identity that marketing and communication could build on from day one.",
      "The harder part: an AI agent for trade finance is a new idea for many banks. The brand had to do some of the explaining, and it had to feel modern and trustworthy to an audience that values trust over novelty.",
    ],
    approach: [
      {
        title: "Its own product, clearly part of the family",
        text: "Alfred had to feel like a product of its own while still clearly belonging to Mitigram. We set three jobs for the identity:",
        points: [
          "Make Alfred easy to recognise in marketing and communication",
          "Help new customers understand what the product does",
          "Feel modern and trustworthy for a bank audience",
        ],
      },
      {
        title: "One team with the agency",
        text: "We worked with Souk Agency as one team, so the identity was shaped around how Mitigram would actually use it: in marketing, in sales conversations and in product communication.",
      },
      {
        title: "A system, not just a logo",
        text: "The result is a complete identity: a logo that gives the AI agent a clear face, a colour palette that sets Alfred apart while fitting with Mitigram, and usage guidelines so the team can apply it consistently across every channel.",
      },
      {
        title: "A design system for every surface",
        text: "Together with Souk, we turned the identity into the Alfred Design System, so it holds up on every surface, from a LinkedIn post to a product screen:",
        points: [
          "**Colour in a 60 / 30 / 10 split:** Aztec Green and White as the base, Light Sea Green and Cyprus for panels and layers, and Teal on one thing only: the call to action or the main message",
          "**Sora for every word**, with clear rules for weights, tracking and sentence case",
          "**A particle pattern** that adds texture without noise, and a teal wash for photos",
          "**A 3D icon for every feature**, in steel and teal glass",
          "**Ready-to-fill templates** for social posts in 1:1, 4:5, 16:9 and 9:16, plus UI components",
        ],
      },
      {
        title: "From identity to launch",
        text: "As co-owner of the Alfred for Banks launch, my job was to make the identity work in the market: in the launch story, the campaigns and the materials sales uses with banks.",
      },
    ],
    results: [
      "Alfred went from a new AI agent to a recognisable brand. Mitigram now has a visual identity for marketing, sales and communication, and an easier way to show new customers what Alfred does.",
      "With clear guidelines and ready-made templates in place, the team keeps the brand consistent without going back to the agency for every new asset.",
      "Since June 2026, the launch has brought in **30+ sales-qualified leads** and **two banks** have been onboarded.",
    ],
    learnings: [
      "**New technology needs a face before it needs a feature list.** When the category is unfamiliar, recognition comes first and explanation follows.",
      "**Design around real use.** The identity got better because the agency saw how the team would actually use it, not just a brief.",
      "**Guidelines are the handover, templates are the habit.** Clear rules and ready-to-fill templates are what let a small marketing team scale a brand on its own.",
    ],
    credits:
      "Visual identity (logo, colour palette and usage guidelines) by [Souk Agency](https://www.soukagency.com/cases/alfred), in collaboration with the Mitigram team. The Alfred Design System (colour rules, typography, patterns, feature icons and templates) built by Souk Agency and Mitigram marketing together. Launch, campaigns and go-to-market by Mitigram marketing.",
    gallery: [
      {
        src: alfredColour,
        alt: "Alfred colour palette in a 60/30/10 split: Aztec Green #0E1E1E, White, Light Sea Green #279B93, Cyprus #174545 and Teal #49EED3, with brand and grey ramps",
        wide: true,
      },
      {
        src: alfredLogo,
        alt: "The Alfred logo in horizontal, stacked and symbol-only versions, in black on light grey and white or teal on Aztec Green",
      },
      {
        src: alfredType,
        alt: "Sora typeface specimen in Light, Regular, Semibold and Bold",
      },
      {
        src: alfredPatterns,
        alt: "The Alfred particle pattern on Aztec Green, Cyprus and Teal backgrounds",
      },
      {
        src: alfredIcons,
        alt: "Eight 3D feature icons in steel and teal glass, including a shield, a funnel, a gauge and a magnifying glass",
      },
    ],
    testimonials: ["nicholas-kelly", "nathalie-sajda"],
    relatedPosts: ["your-ai-agent-needs-a-face", "why-b2b-fintech-brands-sound-the-same"],
  },
  {
    slug: "bachable",
    status: "published",
    updated: "2026-11-22",
    client: "Bachable.io",
    category: "Brand, web & social",
    title: "Bachable: a musician's brand, from the homepage to the inbox",
    summary:
      "Shaping how Bachable, a browser-based music notation editor built on LilyPond, meets musicians: on the homepage, in product features, in the inbox and on social media.",
    cardResult: "Homepage, email and social for a launch now approaching 300 users",
    cover: bachableCover,
    coverAlt: "Bachable brand one-pager header: the script b logo, the line Write beautiful scores in your browser, and the editor showing Canon in D",
    coverPosition: "left center",
    brand: { initials: "b", color: "#F54900", bgFrom: "#18181B", bgTo: "#431407" },
    facts: [
      { label: "Client", value: "Bachable.io, music notation editor built on LilyPond" },
      { label: "My role", value: "Brand Lead" },
      { label: "Team", value: "Erik Dao (Founder), Vivianne (Design Lead) and me" },
      { label: "Audience", value: "Musicians who create, compose and perform" },
      { label: "Timeline", value: "Oct 2025 - present" },
      { label: "Scope", value: "Homepage layout, product feature logic, email and social media" },
    ],
    metrics: [{ value: "~300", label: "Users since the public launch, and growing" }],
    challenge: [
      "Bachable is a music notation editor in the browser, built on LilyPond, the open-source standard for publication-quality engraving. LilyPond produces beautiful scores, but writing music as text can feel technical to musicians who have never touched code.",
      "The homepage has to win musicians over in seconds, and email and social media are where many of them meet Bachable between sessions in the editor. For a team of three, every one of those touchpoints had to sound and look like the product, and give people a reason to come back and write.",
    ],
    approach: [
      {
        title: "A homepage that answers a musician's questions in order",
        text: "I contributed to the homepage layout. It follows the questions a musician has, one section at a time:",
        points: [
          "**What is it?** \"Write beautiful scores in your browser\", with nothing to install",
          "**Is it for me?** \"For everyone who creates, composes and performs\"",
          "**What can it do?** Zero setup, publication-quality engraving, export to every format, publishing with a link",
          "**Can I trust the result?** Real scores engraved with Bachable, from Pachelbel to Vivaldi",
          "**What's the catch?** Plain answers on price, ownership and privacy, then one invitation to start writing",
        ],
      },
      {
        title: "Product features that make sense to musicians",
        text: "Beyond the marketing channels, I contribute to the logic of product features, so each one works the way a musician expects and is easy to explain in a sentence.",
      },
      {
        title: "One voice, from the editor to the inbox",
        text: "The Bachable voice is friendly, plain-spoken and written for musicians. I carry the same rules into every email and post:",
        points: [
          "**Lowercase \"bachable\"** in running copy, as musicians would write it",
          "**Warm, with a next step:** every message points to something to do, like starting a new score",
          "**Musicians are the cast:** real composers and real scores, never lorem ipsum",
          "**Music words used correctly:** score, slur, engraving, in sentence case",
        ],
      },
      {
        title: "Neutral first, one hue",
        text: "The visual system keeps zinc for every surface and saves orange for the one thing that matters. On social and email that means calm layouts, orange for a single call to action, SF Pro for text, and the script \"b\" only as the mark, never re-set or recoloured.",
      },
      {
        title: "Let the music be the hero",
        text: "Bachable's strongest asset is what it produces: publication-quality scores. Posts and emails lead with real engraving and the people who make it, so the product shows its value before anyone reads a feature list.",
      },
    ],
    results: [
      "Bachable launched publicly in 2026 and is now **approaching 300 users**.",
      "The homepage, email and social now follow the same brand system as the product, so musicians get one consistent bachable wherever they meet it.",
      "In November 2026, Bachable joined the Google for Startups Cloud Program.",
    ],
    learnings: [
      "**Lay out the page in the order people ask questions.** What is it, is it for me, what can it do, can I trust it, what's the catch.",
      "**A voice guide is only real when it reaches the inbox.** The rules matter most in the channels people see every week.",
      "**One hue is enough.** Saving orange for one action per view keeps every post recognisable.",
      "**Write for musicians, in musicians' words.** Getting a slur or an engraving term right builds more trust than any adjective.",
    ],
    credits:
      "Product built by founder Erik Dao. Interface design by Vivianne, Design Lead. Brand system by the Bachable team. As Brand Lead, I contributed to the homepage layout and the logic of product features, and run email and social media.",
    gallery: [
      { src: bachableVoice, alt: "Voice rules: friendly, plain-spoken, for musicians, with examples such as lowercase bachable and warm empty states" },
      { src: bachableLogo, alt: "The Bachable logo, a script b in Yellowtail, shown on light, on dark and on orange" },
      {
        src: bachableColour,
        alt: "Colour: orange-600 #F54900 as the single accent beside zinc neutrals from Zinc 950 to Snow, with the orange ramp",
        wide: true,
      },
      { src: bachableType, alt: "Type: Inter in the UI, Yellowtail for the mark only, SF Pro for social and email, Noto Music for notation" },
      { src: bachableShape, alt: "Shape and space: 8, 12 and 24px corner radii, full-pill buttons, a 4px spacing grid and an orange focus ring" },
    ],
    testimonials: ["nathalie-sajda", "nguyen-vo"],
    relatedPosts: [],
    link: { label: "Visit bachable.io", href: "https://bachable.io" },
  },
  {
    slug: "rfsl-utbildning",
    status: "published",
    updated: "2026-11-22",
    client: "RFSL Utbildning",
    category: "B2B marketing & events",
    title: "RFSL Utbildning: selling inclusion training to Swedish businesses",
    summary:
      "Marketing inclusion training from RFSL Utbildning, the training arm of Sweden's largest LGBTQ+ rights organisation, to businesses: from social growth and campaign videos to a roll-up, a flyer and a stand at Väsby Promotion's business day.",
    cardResult: "300%+ organic social growth in three months",
    cover: rfslCover,
    coverAlt: "The purple RFSL Utbildning roll-up in a bright room: Sweden's most experienced organisation in LGBTQI and inclusion, with 550+ certified organisations, 200+ assignments a year and 70+ years of experience",
    brand: { initials: "R", color: "#e040a0", bgFrom: "#4a0e2e", bgTo: "#2d0a1e" },
    facts: [
      { label: "Client", value: "RFSL Utbildning, inclusion training for organisations" },
      { label: "My role", value: "Communications Officer & Content Creator" },
      { label: "Timeline", value: "Aug 2022 - Dec 2023" },
      { label: "B2B work with", value: "IKEA, Cevera and Humble Brands" },
      { label: "Channels", value: "LinkedIn, paid social, email, newsletters, events" },
      { label: "Scope", value: "Social media, video, photography, sales materials, events" },
    ],
    metrics: [
      { value: "300%+", label: "Organic social growth in three months" },
      { value: "400", label: "New LinkedIn followers in three months" },
      { value: "6", label: "Campaign videos, plus three photoshoots" },
    ],
    challenge: [
      "RFSL Utbildning gives companies, organisations and leaders the knowledge and tools to become more inclusive, through training, process support and LGBTQI certification. The expertise is deep, but inclusion training is a considered purchase: buyers need to trust the expert and see the business case.",
      "The brand had to speak to businesses, not only to the community, and show up where buyers are: on LinkedIn, in their inbox and at local business events.",
    ],
    approach: [
      {
        title: "Lead with authority",
        text: "The roll-up opens with one claim and backs it up straight away: \"Sweden's most experienced organisation in LGBTQI and inclusion\", followed by the proof.",
        points: [
          "**550+** LGBTQI-certified organisations",
          "**200+** assignments a year",
          "**70+** years of experience",
          "A promise in one line: \"When you talk about important questions, talk to someone who knows\"",
        ],
      },
      {
        title: "Make the business case, with a reason to act now",
        text: "For Väsby Promotion's business day, a two-page flyer introduced RFSL Utbildning and opened with a business argument: companies with a good work environment are 14% more profitable. It came with an offer for visitors: 50% off the web courses until 16 December 2022, ordered with the code \"Väsby 2022\".",
      },
      {
        title: "Meet buyers face to face",
        text: "At the stand, the roll-up, the flyer and real conversations worked together: local business leaders could ask questions, take the offer home and order with the code.",
      },
      {
        title: "Keep the conversation going online",
        text: "Between events, I produced six campaign videos and three photoshoots, and created paid social, email and newsletter content, with member communications managed in Salesforce. LinkedIn events, such as the [session on norm criticism](https://www.linkedin.com/events/normkritik-ettverktygf-rattskap6993162585596436480/), brought the training to people where they already were.",
      },
    ],
    results: [
      "Organic social following grew by **300%+** in three months, including **400 new LinkedIn followers**.",
      "The work reached **2,000 website visitors** and **300 event participants**, and supported B2B inclusion training with IKEA, Cevera and Humble Brands.",
      "Six campaign videos and three photoshoots gave the team its own library of content for social, email and sales. See a [campaign post on LinkedIn](https://lnkd.in/p/ejfjS4qE).",
    ],
    learnings: [
      "**Authority needs proof.** 550+ certified organisations says more than any adjective.",
      "**Give buyers a reason to act now.** A dated offer with a code turns a good conversation at a fair into an order.",
      "**Show up where buyers already are.** LinkedIn, the inbox and the local business day did more together than any one of them alone.",
    ],
    credits:
      "Training delivered by RFSL Utbildning's trainers and process leaders. The fair photo is a still from Väsby Promotion's video of the day.",
    gallery: [
      { src: rfslRollup, alt: "The RFSL Utbildning roll-up: purple, with a rainbow arc, the claim Sweden's most experienced organisation in LGBTQI and inclusion, a quote and three proof numbers" },
      { src: rfslFair, alt: "Talking with a visitor at the RFSL Utbildning stand at Väsby Promotion's business day, with balloons and other exhibitors' roll-ups behind" },
      { src: rfslFlyer1, alt: "Flyer page one: RFSL Utbildning in rainbow letters, the quote about talking to someone who knows, and sections about the company, its services and contact details" },
      { src: rfslFlyer2, alt: "Flyer page two: Diversity and inclusion, 50% off web courses for Väsby Promotion visitors until 16 December 2022, the courses on offer and a QR code" },
    ],
    testimonials: ["nicholas-kelly", "karl-yves-vallin"],
    relatedPosts: [],
    link: { label: "Visit RFSL Utbildning", href: "https://www.rfslutbildning.se" },
  },
  {
    slug: "meltd-pop-up-bakeshop",
    status: "published",
    updated: "2026-11-22",
    client: "Melt'd",
    category: "Pop-up events & content",
    title: "Melt'd: bringing a pop-up bakeshop to life",
    summary:
      "Supporting Melt'd, a pop-up bakeshop in Stockholm with Asian-inspired bakes, at its latest three pop-ups: setting up, filming and photographing, and serving customers.",
    cardResult: "Set-up, photos, video and customer service for three pop-ups",
    cover: meltdCover,
    coverAlt: "The Melt'd script wordmark in cream on deep red, above the words Pop-up bakeshop, Stockholm",
    brand: { initials: "M", color: "#EADBC5", bgFrom: "#58191A", bgTo: "#2a0c0d" },
    facts: [
      { label: "Client", value: "Melt'd, a pop-up bakeshop in Stockholm" },
      { label: "My role", value: "Pop-up support: set-up, filming, photography and customer service" },
      { label: "Pop-ups", value: "Bollos Bakery, No.92 Tea House, A.B.Café" },
      { label: "Timeline", value: "Sep - Nov 2026" },
      { label: "Channel", value: "Instagram, @meltd.bakeshop", href: "https://www.instagram.com/meltd.bakeshop/" },
      { label: "Scope", value: "Event set-up, food photography, short videos, customer service" },
    ],
    metrics: [
      { value: "3", label: "Pop-ups in three months" },
      { value: "3", label: "Partner venues around Stockholm" },
    ],
    challenge: [
      "Melt'd has no shop of its own. It pops up in cafés, bakeries and stores around Stockholm, bringing Asian-inspired bakes to the local fika scene. Every pop-up has a slightly different menu: some favourites come back, others appear once and never return.",
      "Each pop-up is a shop for one afternoon, in someone else's space. It has to be set up, sold and captured on camera in a few hours, because Instagram is where people find out where Melt'd will be next.",
    ],
    approach: [
      {
        title: "Setting up the pop-up",
        text: "I helped set up each pop-up in its host venue, so that for one afternoon a corner of a café, bakery or tea house felt like Melt'd: the bakes on display, the paper bags ready, and the line-up easy to see.",
      },
      {
        title: "Filming and photographing",
        text: "I filmed and photographed the bakes in the places they were sold: hands holding a fresh bun, matcha and coffee pairings, branded paper bags, autumn leaves and Stockholm rain. Each pop-up got its own set, so the feed shows where Melt'd has been and makes people want to catch the next one.",
      },
      {
        title: "Serving customers",
        text: "On the day, I helped with customer service, so every visitor got a warm welcome, an answer about the bakes, and their order packed and ready to take away.",
      },
    ],
    results: [
      "Three pop-ups in three months, at **Bollos Bakery** (27 September), **No.92 Tea House** (25 October) and **A.B.Café** (15 November), each set up, served and documented on Instagram.",
      "The photos and videos fill the Melt'd feed, which now works as a living menu and calendar: what Melt'd bakes, where it has been, and where to find it next.",
    ],
    learnings: [
      "**Scarcity is a story.** Bakes that might never return give people a reason to come this time.",
      "**Shoot the place, not just the product.** The café table, the weather and the bag say where and when as clearly as the caption.",
      "**The counter is the best research.** Talking to customers shows which bakes people come back for, and what is worth photographing next.",
    ],
    credits:
      "Concept, brand and bakes by the Melt'd team, at partner venues Bollos Bakery, No.92 Tea House and A.B.Café. I supported set-up, filming, photography and customer service. One photo in the feed is credited to @nattie.yah.",
    gallery: [
      { src: meltdStoryIntro, alt: "Melt'd intro story: Melt'd is a pop-up bakeshop in Stockholm, Sweden, bringing unique, creative and tasty flavours to the local fika scene" },
      { src: meltdStoryPopups, alt: "Melt'd story explaining that pop-ups take place at cafés, bakeries and stores, and each menu is slightly different" },
      { src: meltdFeed, alt: "The Melt'd Instagram feed: buns, matcha and coffee, branded paper bags, and pop-up announcements for Bollos Bakery, No.92 Tea House and A.B.Café" },
    ],
    galleryColumns: 3,
    testimonials: ["nguyen-vo", "nhu-que-thanh-le"],
    relatedPosts: [],
    link: { label: "Follow @meltd.bakeshop", href: "https://www.instagram.com/meltd.bakeshop/" },
  },
  {
    slug: "sowilo-personal-brand",
    status: "published",
    updated: "2026-11-22",
    client: "Personal brand",
    category: "Brand identity",
    title: "The Sowilo mark: a personal brand between Vietnam and Sweden",
    summary:
      "Designing my own identity around Sowilo, the Elder Futhark rune for the sun: a Vietnamese name initialed in Viking script, built into a full system for this website.",
    cardResult: "A logo system, the Solar Amber palette, typography and a design system for this site",
    cover: sowiloCover,
    coverAlt: "The gold Sowilo rune on a dark tile above the words The Sowilo mark",
    brand: { initials: "ᛊ", color: "#F2C94C", bgFrom: "#111111", bgTo: "#1a1a0a" },
    facts: [
      { label: "Client", value: "Myself" },
      { label: "My role", value: "Brand designer and strategist" },
      { label: "Year", value: "2026" },
      { label: "Deliverables", value: "Logo system, colour palette, typography, brand story, website design system" },
    ],
    metrics: [
      { value: "8", label: "Logo variations" },
      { value: "6", label: "Brand colours" },
      { value: "4", label: "Key symbols" },
    ],
    challenge: [
      "I help other brands find a clear story. My own needed one too: something that connects a Vietnamese storyteller with his Scandinavian home, and says what I do in a single mark.",
      "It also had to work in practice: from a favicon to a CV, on a website with both a light and a dark theme, and accessible to everyone.",
    ],
    approach: [
      {
        title: "Find the symbol",
        text: "The mark is **Sowilo (ᛊ)**, a rune from the Elder Futhark, the oldest runic alphabet used across Scandinavia. Sowilo means the sun. It is also the letter S, my initial, written in the language of my adopted home: a Vietnamese name initialed in Viking script.",
      },
      {
        title: "One stroke, four meanings",
        text: "A single stroke that changes direction twice carries the whole story:",
        points: [
          "**Sun and light:** warmth, and the power to make things grow",
          "**Energy and momentum:** campaigns that move, content that strikes",
          "**East meets North:** two cultures woven into one mark",
          "**Forward motion:** the stroke always resolves downward and forward",
        ],
      },
      {
        title: "A system, not just a logo",
        text: "The mark grew into a full identity: dark and light primary marks, horizontal and stacked lockups, and the mark on its own. **Solar Amber** gives one loud colour, Solar Gold, against warm neutrals. **Cinzel**, with Roman-inscription capitals, echoes the carved rune; Cormorant SC steps in for Vietnamese letters, and Inter handles everything else.",
      },
      {
        title: "Accessible by design",
        text: "Solar Gold fails contrast as text on a light background (1.5:1), so it got a darker sibling, Gold Ink (4.9:1), used automatically for gold text in light mode. The rule became part of the brand: gold is a fill, or text on dark, never text on light.",
      },
    ],
    results: [
      "The Sowilo mark now runs through this whole website, in both light and dark themes, with a downloadable logo kit in the brand book.",
      "Every colour has a token name and a job, and the rules are written down, so the site stays consistent as it grows. Pages follow one pattern: a clear promise, real work as proof, then one ask.",
    ],
    learnings: [
      "**Designing for yourself is the hardest brief.** Writing the story first made the visual choices easier.",
      "**Accessibility shapes a palette.** The best colour for a logo is not always the best colour for text.",
      "**Write the rules down.** A design system only works when the next page follows it too.",
    ],
    gallery: [
      { src: sowiloLogo, alt: "The Sowilo logo system: primary marks on dark and light, horizontal and stacked lockups, and the mark alone in gold, white and dark" },
      { src: sowiloPalette, alt: "The Solar Amber 2.0 colour palette with dark and light values, and a contrast check showing Gold Ink passing where Solar Gold fails" },
      { src: sowiloSymbolism, alt: "Four key symbols: Sun and Light, Energy and Momentum, East Meets North, Forward Motion" },
      { src: sowiloType, alt: "Typography: Cinzel for headlines and the brand name, Inter for body text, with a size scale" },
    ],
    testimonials: ["nicholas-kelly", "dailet-naila-soriano"],
    relatedPosts: [],
    link: { label: "Open the full brand book", href: "/brand-book" },
  },
];

// `import.meta.env.DEV` is false in the production build, so this whole list is removed from it.
const drafts: CaseStudy[] = import.meta.env.DEV ? [
  // Add new case studies here while you write them.
] : [];

/** Case studies visible in this build: drafts only show in `npm run dev`. */
export const caseStudies: CaseStudy[] = [...published, ...drafts];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
