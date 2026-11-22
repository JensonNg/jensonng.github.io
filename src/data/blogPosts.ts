import circularCover from "../images/blog/circular-economy-cover.webp";
import covidCover from "../images/blog/covid-cover.webp";
import covidActions from "../images/blog/covid-mckinsey-actions.webp";
import araTay from "../images/blog/aratay-son-la.webp";
import foodStuckersCover from "../images/blog/food-stuckers-cover.webp";
import yifangCover from "../images/blog/yifang-cover.webp";
import yifangTea from "../images/blog/yifang-tea.webp";
import financeCover from "../images/blog/young-adults-finance-cover.webp";
import financeHypotheses from "../images/blog/young-adults-finance-hypotheses.webp";
import financeInsights from "../images/blog/young-adults-finance-insights.webp";
import financeRecommendations from "../images/blog/young-adults-finance-recommendations.webp";
import aiAgentCover from "../images/blog/ai-agent-face-cover.webp";
import fintechSoundCover from "../images/blog/fintech-sound-same-cover.webp";
import greenTradeCover from "../images/blog/green-trade-finance-cover.webp";

/**
 * Blog posts.
 *
 * To add a post: copy one entry, give it a unique `slug` (used in the URL:
 * /blog/<slug>), and write the body as a list of blocks. Posts are sorted by
 * date automatically; set `featured: true` on the one to show at the top.
 *
 * Paragraph and callout text supports **bold** and [links](https://...).
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "facts"; items: { label: string; value: string; href?: string }[] }
  /** A group of highlighted statements, e.g. hypotheses, insights or recommendations. */
  | { type: "callouts"; items: { label?: string; text: string }[] }
  | { type: "source"; text: string; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2021-02-01" */
  date: string;
  category: string;
  /** Language of the post body: "en" or "vi" */
  lang: "en" | "vi";
  /** Set when the post is a translation, e.g. "Vietnamese" */
  translatedFrom?: string;
  authors: string;
  cover: string;
  coverAlt: string;
  /** CSS object-position for cropped cover thumbnails, e.g. "center bottom" */
  coverPosition?: string;
  /** Optional credit or note shown under the cover on the article page */
  coverCaption?: string;
  featured?: boolean;
  body: Block[];
};

const posts: BlogPost[] = [
  {
    slug: "your-ai-agent-needs-a-face",
    title: "Your AI agent needs a face before it needs a feature list",
    excerpt:
      "When a category is new, recognition comes before explanation. What launching Alfred, Mitigram's AI agent for trade finance, taught me about introducing AI to banks.",
    date: "2026-11-21",
    category: "B2B marketing",
    lang: "en",
    authors: "Son Nguyen",
    cover: aiAgentCover,
    coverAlt: "Cover reading: Your AI agent needs a face, before it needs a feature list",
    featured: true,
    body: [
      {
        type: "p",
        text: "When a bank hears \"AI agent\" for the first time, it does not picture a product. It pictures a question mark. That is the starting point for anyone bringing AI into a conservative industry, and it is where we started with **Alfred**, Mitigram's AI agent for trade finance.",
      },
      {
        type: "p",
        text: "Alfred turns the manual, email-based work behind trade finance into an automated, agentic process. Impressive, but hard to picture. And what people cannot picture, they do not remember.",
      },
      { type: "h2", text: "Explaining is not the first job" },
      {
        type: "p",
        text: "The instinct in B2B tech marketing is to explain: list the features, show the workflow, prove the return on investment. All of that matters. But when a category is new, people first need something to hold on to. A name, a face, a colour they recognise the next time they see it. Recognition comes first, understanding follows.",
      },
      { type: "p", text: "That is why the Alfred identity had three jobs, in this order:" },
      {
        type: "callouts",
        items: [
          { label: "1. Be recognised", text: "Alfred should be easy to spot in a LinkedIn feed, a conference hall or a sales deck." },
          { label: "2. Explain", text: "The visuals should do part of the explaining, so a new customer gets what Alfred does before reading a word." },
          { label: "3. Reassure", text: "It should feel modern without feeling risky. Banks buy trust first." },
        ],
      },
      { type: "h2", text: "Its own product, borrowing trust from the family" },
      {
        type: "p",
        text: "A new AI product has to stand on its own, or it disappears inside the parent brand. But it also needs to borrow trust from that brand. For Alfred, that meant its own logo and colour palette, designed to clearly belong to Mitigram. Not a sub-brand that blends in, and not a start-up that looks like it came from nowhere.",
      },
      { type: "h2", text: "Design for how the brand will actually be used" },
      {
        type: "p",
        text: "We worked with [Souk Agency](https://www.soukagency.com/cases/alfred) as one team rather than as client and supplier. That changed the brief. Instead of \"make it look good\", the question became: where will Alfred show up next month, and who has to make that asset? Often the answer is a small marketing team on a deadline. So the identity came with usage guidelines that make the right choice the easy choice.",
      },
      {
        type: "p",
        text: "You can read the whole story, with results, in the [Alfred for Banks case study](/work/alfred-for-banks).",
      },
      { type: "h2", text: "Three questions before you launch an AI product" },
      {
        type: "callouts",
        items: [
          { label: "Can people recognise it?", text: "If someone cannot recognise it after seeing it once, you pay for every impression twice." },
          { label: "Does the identity explain anything?", text: "A good identity carries part of the message, so your copy does not have to carry all of it." },
          { label: "Can your team use it without you?", text: "Guidelines are not a PDF for the drawer. They are how a brand survives its first hundred assets." },
        ],
      },
      {
        type: "callouts",
        items: [
          {
            label: "My take",
            text: "Many AI products in finance struggle not because the technology is weak, but because nobody can picture them. Give your agent a face, make it feel like part of a brand people already trust, and let the feature list come second. Recognition earns you the meeting. The features win the deal.",
          },
        ],
      },
    ],
  },
  {
    slug: "why-b2b-fintech-brands-sound-the-same",
    title: "Why B2B fintech brands all sound the same (and how to sound like yourself)",
    excerpt:
      "Seamless, end-to-end, innovative, powered by AI. Why fintech messaging converges, and the Communication Hierarchy I use to make a brand sound like one company with something specific to say.",
    date: "2026-11-21",
    category: "Brand strategy",
    lang: "en",
    authors: "Son Nguyen",
    cover: fintechSoundCover,
    coverAlt: "Cover reading: Why B2B fintech brands sound the same",
    body: [
      {
        type: "p",
        text: "Open five fintech websites and read the headlines. Seamless. End-to-end. Innovative platform. Digital transformation. Powered by AI. Swap the logos and you would hardly notice.",
      },
      {
        type: "p",
        text: "I work in trade finance, one of the most complex corners of fintech, and I understand why this happens. It is not because marketers lack ideas. It is because of how B2B messaging gets made.",
      },
      { type: "h2", text: "Why it happens" },
      {
        type: "callouts",
        items: [
          { label: "Writing for the committee", text: "Every stakeholder adds a word they care about. The result is a sentence everyone agrees with and nobody remembers." },
          { label: "Safety in sameness", text: "In a regulated industry, sounding like everyone else feels safe. If competitors say \"secure and compliant\", so do we." },
          { label: "Describing the product, not the change", text: "We describe what the platform is. Customers care about what changes for them on Monday morning." },
        ],
      },
      { type: "h2", text: "Start with a hierarchy, not a tagline" },
      {
        type: "p",
        text: "The most useful tool I have built at Mitigram is not a tagline. It is a **Communication Hierarchy**: an agreed order of what we say first, second and third, and to whom. When sales, marketing, partners and leadership share that order, the brand starts to sound like one company instead of five.",
      },
      { type: "p", text: "A simple version has three levels:" },
      {
        type: "callouts",
        items: [
          { label: "1. One core promise", text: "The single change you make for your customer, in words they would use themselves." },
          { label: "2. A few pillars", text: "Three or four reasons to believe that promise. Each one should be something a competitor cannot simply copy and paste." },
          { label: "3. Proof for each audience", text: "Numbers, customer stories and examples, sorted by who is listening: a head of trade finance, an operations team, an IT buyer." },
        ],
      },
      { type: "h2", text: "Then write like a person" },
      {
        type: "p",
        text: "A hierarchy tells you what to say. Tone of voice tells you how. My test is simple: would a customer say this sentence out loud to a colleague? \"UniCredit and Brückner Group cut guarantee processing time by around 80%\" passes. \"We leverage innovative solutions to drive seamless digital transformation\" does not.",
      },
      { type: "p", text: "Specific beats impressive. Concrete beats clever. And a real customer's words beat both." },
      {
        type: "callouts",
        items: [
          {
            label: "My take",
            text: "Sounding different in B2B fintech is not about being louder or funnier. It is about being specific. Agree internally on what you say first, prove it with real numbers and real customers, and say it the way a person would. Most competitors will not do that work, which is exactly why it works.",
          },
        ],
      },
    ],
  },
  {
    slug: "green-trade-finance-needs-better-storytellers",
    title: "Green trade finance needs better storytellers",
    excerpt:
      "Trade finance moves the goods the green transition depends on, yet it talks about sustainability in abstractions. An environmental scientist turned fintech marketer on how to make it concrete and credible.",
    date: "2026-11-21",
    category: "Sustainability",
    lang: "en",
    authors: "Son Nguyen",
    cover: greenTradeCover,
    coverAlt: "Cover reading: Green trade finance needs better storytellers",
    body: [
      {
        type: "p",
        text: "Trade finance is the plumbing of global trade. Letters of credit, guarantees and supply chain finance help goods move between buyers and sellers who have never met. Most people never see it, which is exactly why its role in sustainability is so hard to communicate.",
      },
      {
        type: "p",
        text: "I came to marketing from environmental science, and today I work in trade finance. From where I sit, the sector has a real story to tell about the green transition, but it often tells it badly.",
      },
      { type: "h2", text: "The problem: abstract promises" },
      {
        type: "p",
        text: "Green finance communication tends to stay at 30,000 feet: commitments, frameworks, percentages of a portfolio. All necessary, all hard to feel. And as regulators and customers get stricter about vague green claims, abstract language is not just forgettable. It is a risk.",
      },
      { type: "h2", text: "Tell the story of the goods" },
      {
        type: "p",
        text: "Behind every trade finance transaction is something physical: solar panels on their way to a new plant, recycled steel, a shipment of coffee from a farming cooperative. That is where the story is. When a bank finances the trade, it helps something real happen.",
      },
      {
        type: "callouts",
        items: [
          { label: "Follow one shipment", text: "Show the journey of a single transaction from order to delivery, and the people it touched along the way." },
          { label: "Show what you removed", text: "Digital trade finance replaces paper, couriers and long email chains. Fewer documents and faster processes are concrete benefits, so measure them and say how much." },
          { label: "Lead with proof, not adjectives", text: "If you cannot back a claim with a number or a named example, cut it." },
        ],
      },
      { type: "h2", text: "Human-centred, even in finance" },
      {
        type: "p",
        text: "Human-centred design taught me to start with people, not systems. In trade finance, that means the operations specialist chasing documents, the exporter waiting to get paid, and the community at the end of the supply chain. Sustainability becomes real when those people are in the story.",
      },
      {
        type: "callouts",
        items: [
          {
            label: "My take",
            text: "The financial sector does not need more sustainability slogans. It needs storytellers who make the invisible parts of trade visible, and honest. Be specific, show the real goods and the real people, and let proof do the persuading. That is how green finance earns trust instead of scepticism.",
          },
        ],
      },
    ],
  },
  {
    slug: "empowering-young-adults-in-sweden-financial-app",
    title: "Empowering Young Adults in Sweden with Financial App Feature: An Inspirational View",
    excerpt:
      "How might we make financial management easier for young adults in Sweden during tough economic times? What I learned from my first UX research project: a survey of 66 people, five interviews and three recommendations for banking apps.",
    date: "2023-11-20",
    category: "UX research",
    lang: "en",
    authors: "Son Nguyen",
    cover: financeCover,
    coverAlt: "Illustration of young people in winter coats gathered around a desk covered in charts and documents",
    coverCaption: "All pictures in this article were generated with Adobe Firefly.",
    body: [
      {
        type: "p",
        text: "Imagine being a young adult in Sweden, handling your money and spending during tough economic times in Europe. How might we make financial management easier and more stable during these times? That’s the story I jumped into! As a beginner in UX research, I wanted to make things easier for this group, representing myself while seeking insights to make banking apps more attractive to them. Let’s dive into what I discovered!",
      },
      { type: "h2", text: "Initial assumptions and user needs" },
      {
        type: "image",
        src: financeHypotheses,
        alt: "Illustration of three people in business attire, each in front of a page of notes",
      },
      {
        type: "p",
        text: "I began by thinking of ideas and guesses based on three hours of research and my own experiences. Then, I turned those ideas into hypotheses, shaping assumptions to capture what users might seek:",
      },
      {
        type: "callouts",
        items: [
          { text: "I believe that users prefer an online platform to seek financial advice." },
          { text: "I believe that our users want the app to include Expense Tracking and Optimization." },
          { text: "I believe that there is a need for Sustainable Investment Guidance." },
          { text: "I believe that users aim to be empowered and independent in their financial journey." },
        ],
      },
      { type: "h2", text: "Quantitative and qualitative insights" },
      {
        type: "image",
        src: financeInsights,
        alt: "Line illustration of three people discussing charts and wireframes on a large wall",
      },
      {
        type: "p",
        text: "I gathered insights within only 1 week from 66 participants from **18-65 years old** who **live in Sweden**, who answered the survey, and delved into the minds of five individuals through **45-minute interviews**. Insights from the [screening survey](https://tally.so/r/w2A6QA) revealed that **70% of participants believed young people are more interested in financial advice** nowadays. Notably, **76% preferred seeking advice through online/own research** due to its **accessibility** and **convenience**. However, **only 19% turned to banking apps** for financial advice, signalling potential areas for improvement within these applications.",
      },
      {
        type: "p",
        text: "Combined with all the in-depth interviews with 5 interviewees, I realized there was a need to adjust the priority hypotheses, which aligned with the insights I got from most interviewees. And then, here are **three** key insights I chose:",
      },
      {
        type: "callouts",
        items: [
          {
            label: "Insight 1",
            text: "Users prefer simple, easily navigable apps with fewer features, seeking empowerment and independence in their financial journey.",
          },
          {
            label: "Insight 2",
            text: "Users mentioned the convenience of creating term deposits directly within banking apps. This functionality was highlighted as a valuable feature, allowing users to quickly initiate term deposits without the need for additional processes or visits to physical branches.",
          },
          {
            label: "Insight 3",
            text: "Limited discussion on sustainable investment. This lack of emphasis suggests a potential gap in the users’ current financial considerations on eco-friendly investment.",
          },
        ],
      },
      { type: "h2", text: "Next steps: my recommendations" },
      {
        type: "image",
        src: financeRecommendations,
        alt: "Illustration of a smartphone showing a banking app, surrounded by coins, a piggy bank and finance icons",
      },
      {
        type: "p",
        text: "After analyzing the interview and screening results, combined with the card sorting result, I acknowledge that the study had a limited timeframe for researching more on the topic of **sustainable investment** in Sweden. By considering the economic challenges, it’s entirely valid to prioritize recommendations that are more immediate and pertinent to users’ current needs and behaviours. With that said, I defined 3 fundamental principles with recommendations for the improvement of the banking app:",
      },
      {
        type: "callouts",
        items: [
          {
            label: "Personalized financial dashboard for building trust",
            text: "Offer users the ability to customize their financial dashboard, prioritising and selecting the financial metrics and insights they wish to monitor regularly. This makes the app more personal, giving them info that suits them best. Plus, they can adjust how much detail or suggestions they get, letting them control their money data.",
          },
          {
            label: "Simplified interface and multilingual support",
            text: "Redesign the banking app interface with a primary focus on simplicity and intuitive navigation, highlighting essential financial data such as account balances, upcoming payments, and investment values. Also, add English for people who don’t speak Swedish. This makes the app more inclusive and easier to understand for everyone.",
          },
          {
            label: "Integrated term deposit creation",
            text: "Considering that this feature already exists in many developing countries like Vietnam, India, etc., there’s a need to integrate a user-friendly feature within the app for term deposit creation. This feature allows users to quickly set up their savings, choose the duration they want to save for, view their anticipated interest, and start saving - all within the app, eliminating the need to visit a bank office. This simplicity encourages increased savings.",
          },
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "While this research has limitations, it helps me understand more the financial usage experiences of people around my community. Even though sustainable investment remains crucial, as recognized by interviewees, my suggestions tend to prioritise practical enhancements for the current economic landscape and the user’s preferable features. Empowering young adults through intuitive design, personalized features, and effortless savings pathways, I am eager to see if any banking app can utilize these features to attract more young adult users in Sweden.",
      },
      {
        type: "source",
        text: "Originally published on Medium:",
        label: "medium.com/@sonngoc.nguyen",
        href: "https://medium.com/@sonngoc.nguyen/empowering-young-adults-in-sweden-with-financial-management-a-view-from-a-beginner-in-ux-research-b3f859506c1a",
      },
    ],
  },
  {
    slug: "yifang-fruit-tea-stockholm",
    title: "YiFang Fruit Tea - New option for young couples",
    excerpt:
      "Stuck with ideas for Valentine? Wanna surprise and please your girl/boyfriend? Take her/him to Yi Fang, a small newly-opened bubble tea shop, right in the centre of Stockholm.",
    date: "2021-02-01",
    category: "Food Stuckers",
    lang: "en",
    authors: "Son Nguyen & Yul Sku",
    cover: yifangCover,
    coverAlt: "The lit Yi Fang Taiwan Fruit Tea sign above the shop entrance in Stockholm",
    body: [
      {
        type: "facts",
        items: [
          { label: "Address", value: "Mäster Samuelsgatan 38, Stockholm" },
          { label: "Opening hours", value: "Mon-Sun 11:30-19:30" },
          { label: "Website", value: "yifangteastockholmse.webnode.se", href: "https://yifangteastockholmse.webnode.se/" },
          { label: "Price", value: "Approx. 50 SEK medium, 70 SEK large" },
        ],
      },
      {
        type: "p",
        text: "Stuck with ideas for Valentine? Wanna surprise and please your girl/boyfriend? Take her/him to Yi Fang, a small newly-opened bubble tea shop, right in the centre of Stockholm. Despite their name, their menu has a large choice of drinks related to tea. During their opening week, they offered a 10% discount and a small gift for the first 15 customers of the day. Luckily, we were two first on the last give-away day and received a small cup holder as in the picture below (Yayyy!!!!).",
      },
      {
        type: "image",
        src: yifangTea,
        alt: "A Yi Fang bubble tea in a blue cup holder, held up in front of the shop's neon sign",
        caption: "Our opening-week give-away: a small cup holder.",
      },
      {
        type: "p",
        text: "Regarding the bubble tea, we’ve tried hot Taro Latte (50% sugar), and cold Brown Sugar Pearl Oolong Tea Latte. Both of them were so delicious that we couldn’t stop drinking LOL. As Yi Fang said, we couldn’t feel anything “fake” while drinking them. They were mainly made from natural ingredients incl. tea, fruit, and milk.",
      },
      {
        type: "p",
        text: "The hot taro latte is made from a lot of fresh chunky taro which fits perfectly with hot milk (vegan option available). It’s hot enough to keep you away from the cold outside of Nordic winter but still drinkable immediately.",
      },
      {
        type: "p",
        text: "The other tea is appropriate for those who wanna drink bubble tea without fear of gaining weight. The brown sugar pearl is freshly made every day. Even though the brown sugar & pearl are not quite mixed with each other since they weren’t cooked in the same pot (we assume), Brown Sugar Pearl Oolong Tea Latte is kind of a harmony of all the ingredients. You can feel the particular bitterness of oolong tea which is lighter thanks to the milk part and the taste rises to a new level with a little sweet of the brown sugar pearl mixture.",
      },
      {
        type: "p",
        text: "In general, Yi Fang does a good job with their drinks; however, the shop is small with only 8 chairs and no restroom for customers. Apart from this, the owner and the workers are friendly and approachable.",
      },
      {
        type: "facts",
        items: [
          { label: "Location", value: "9/10" },
          { label: "Space", value: "6/10" },
          { label: "Drinks", value: "8/10" },
          { label: "Price", value: "8/10" },
          { label: "Service", value: "7/10" },
        ],
      },
      {
        type: "source",
        text: "More photos on Instagram:",
        label: "Yifang Tea Stockholm - by Food Stuckers",
        href: "https://www.instagram.com/p/CKuh3GMMXvn/",
      },
    ],
  },
  {
    slug: "hello-world-food-stuckers",
    title: "Hello world, we're Food Stuckers - Yul & Ngo",
    excerpt:
      "Two Vietnamese guys in Sweden who can't stop eating and looking for the best food every day. Follow us to fulfill your empty stomach.",
    date: "2021-01-28",
    category: "Food Stuckers",
    lang: "en",
    authors: "Son Nguyen & Yul Sku",
    cover: foodStuckersCover,
    coverAlt: "Illustrated avatars of Yul and Ngo with the Food Stuckers logo",
    body: [
      { type: "p", text: "Hej hej! Welcome to our spiritual child!" },
      { type: "h2", text: "But wait, who are we?" },
      {
        type: "p",
        text: "We’re two Asians living in Stockholm where the cuisine’s been said to be boring due to lack of choice even at a high-standard price.",
      },
      { type: "h2", text: "How could our souls meet?" },
      {
        type: "p",
        text: "We were friends at first (ofc). However, under this pandemic situation, we were stuck together in our small inner circle and found that we’re passionate about one common thing: good food at a good price. Then, we became bros sharing a consistent belief in affordable & delicious meals existing everywhere, even in this Nordic capital.",
      },
      { type: "h2", text: "Why was our child born?" },
      {
        type: "p",
        text: "Everything in the world has its own mission to complete & so does our small baby. It represents us to tell you about our food adventure & tries to satisfy your food cravings in all categories. It could be a romantic dinner to please your crush, or a budgeted fika to have fun with your friends, or even a business lunch to impress your customers. We don’t, surely, focus on the famous and touristic places which many have already reviewed. Instead we will take you to discover various local restaurants with detailed reviews as objective as possible.",
      },
      { type: "h2", text: "Why should you follow us?" },
      {
        type: "p",
        text: "Don’t do that if you wanna destroy your wallet with unworthy places! Don’t do that if you wanna eat boring food day by day! & don’t do that if you wanna miss the most trendy and interesting restaurants in Sthlm!",
      },
      { type: "quote", text: "Just do that to satisfy your eyes, fulfill your empty stomach, & save your money for other importances." },
      { type: "p", text: "Just do that & you never regret, we promise!" },
      {
        type: "p",
        text: "P/s: You might see romantic concepts & think that we’re a couple. Yet we aren’t, we’re just bros with the same soul who’re always stuck with the food.",
      },
      { type: "source", text: "Follow us on Instagram:", label: "@foodstuckers.sthlm", href: "https://instagram.com/foodstuckers.sthlm" },
    ],
  },
  {
    slug: "the-roots-of-ara-tay-coffee",
    title: "Chiềng Chung, Mường Chanh - The roots of a community devoted to Arabica coffee",
    excerpt: "“The French brought coffee to Sơn La. Now the people of Sơn La will take coffee to the world.”",
    date: "2020-12-23",
    category: "Brand storytelling",
    lang: "en",
    translatedFrom: "Vietnamese",
    authors: "Son Nguyen",
    cover: araTay,
    coverAlt: "Green coffee-growing hills of Sơn La at golden hour, with wild grass in the foreground",
    body: [
      {
        type: "p",
        text: "My village lies at the heart of Sơn La's Arabica growing region, a place where coffee has been grown for more than 30 years. Ever since the French colonists brought the plant here, the whole village has grown and tended it without really knowing anything about it - letting it grow naturally and fertilising it like any other crop we farmed. Most people in our two communes are Thái, and we kept the traditional farming methods of the past, so the quality of our beans barely improved. When harsh weather struck, the village could not protect the crop. Harvests were small, and in some years we lost everything.",
      },
      {
        type: "p",
        text: "Because coffee came to us through the French, we only knew how to copy what had been done before. We did not understand it; we grew it by instinct. Little by little, buyers bought less, because the quality never got better. Some villagers switched to other crops to improve their income. Then came waves of frost that ruined the harvest and brought real hardship. Many families next door, worn down, cut down hectares of coffee they had cared for for nearly ten years and planted something else.",
      },
      {
        type: "p",
        text: "But many families stayed deeply committed. Together with me, they learned more after visiting the coffee-growing areas of Lâm Đồng. We came to understand our coffee better and to see the true value of the beans we grow. From there our production group was born, and the Ara-Tay Coffee brand gradually took shape to bring the village's high-quality coffee forward. Making coffee is not simple - it may be very hard - but I, and every member of our group and cooperative, believe we can do it.",
      },
      { type: "quote", text: "“The French brought coffee to Sơn La. Now the people of Sơn La will take coffee to the world.”" },
      { type: "source", text: "Learn more:", label: "Ara-Tay Coffee", href: "https://www.facebook.com/AraTayCoffee/" },
    ],
  },
  {
    slug: "facing-covid-19-what-businesses-are-missing",
    title: "Facing COVID-19: What are businesses missing?",
    excerpt:
      "Conversations with hundreds of companies around the world show the full picture of how businesses are responding to the challenges of the COVID-19 pandemic - and where they are still struggling.",
    date: "2020-12-18",
    category: "Business strategy",
    lang: "en",
    translatedFrom: "Vietnamese",
    authors: "Son Nguyen",
    cover: covidCover,
    coverPosition: "center bottom",
    coverAlt: "A hand holding bamboo straws and a green leaf, with the article title in Vietnamese",
    body: [
      {
        type: "p",
        text: "Although the list below is fairly complete, some companies have chosen different moves. Even so, the evidence shows that companies are still struggling to act in the right and most sensible way. Here are the five main challenges:",
      },
      { type: "h2", text: "1. Knowing is not the same as being able to apply it" },
      {
        type: "p",
        text: "More and more organisations struggle to turn theory into a real response unless they have been through a similar situation before. Managers who have never lived through a crisis, or have only rehearsed one in a simulation, find it genuinely hard to respond in the right way. The theory of escalation, for example, is easy enough to understand, but applying it in practice is hard - simply because reality never looks like the handbook. Many of the situations that turn into a ‘crisis’ come from managers whose decision not to escalate made things even worse for their business.",
      },
      { type: "h2", text: "2. Employee safety comes first, but the measures fall short" },
      {
        type: "p",
        text: "Policy-making at many companies is patchy and ineffective, especially in places the coronavirus has not yet ‘visited.’ Many businesses in technology and professional services are being very conservative: their protective measures increase the feeling of safety more than they actually keep people safe. Temperature checks, for example, may not be the most effective form of screening, as the virus can spread without symptoms. Asking employees to stay home when they feel unwell reduces the risk of transmission. Policies like this work better when employees are compensated - and shielded from other consequences.",
      },
      {
        type: "p",
        text: "Some companies do not think through the side effects of their policies. A travel ban without a work-from-home policy, for example, can turn the office into a crowded hotspot with an even higher risk of infection. Or a single policy is applied across the whole company without considering the specific needs of different roles and teams.",
      },
      {
        type: "image",
        src: covidActions,
        alt: "McKinsey chart listing how companies are responding to the outbreak with five sets of actions across 18 work streams",
        caption: "An overview of how companies are responding to the COVID-19 pandemic. (Image: McKinsey)",
      },
      { type: "h2", text: "3. Optimism about demand is dangerous" },
      {
        type: "p",
        text: "Optimism about a rebound in demand is a real problem, especially for companies that are short on working capital or liquidity and at risk of bankruptcy. Companies in trouble tend to bet on a fast recovery - or a smaller drop. Facing the possibility of a long downturn matters, because acting early, before the recession ‘lands,’ can be more effective than acting later. Selling an asset to raise much-needed cash, for example, may be done at a higher price today than in a few weeks or months.",
      },
      { type: "h2", text: "4. Different teams, different assumptions" },
      {
        type: "p",
        text: "Some companies are responding to the coronavirus through separate functions or silos (for example, procurement handles supply and demand, while marketing and sales handle customer contact). But each team works from its own assumptions and builds its own tactics, digging deeper into its own department instead of thinking about where the other teams are heading - or what might happen next.",
      },
      { type: "h2", text: "5. The short term matters, but don't forget the long term" },
      {
        type: "p",
        text: "Responding quickly and effectively is of course important, and companies have been pursuing many sensible responses. But across these work streams, long-term impact has become an afterthought. A recession may come. The disruption from this outbreak is reshaping markets. Credit markets may shift, even without new stimulus. Supply-chain resilience will be at a premium. It may sound unreasonable to leadership teams already working 18-hour days, but too few are giving enough time and energy to the decisions that will matter most in the long run.",
      },
      {
        type: "source",
        text: "Translated and adapted from McKinsey & Company, COVID-19: Implications for business - Briefing note, 16 March 2020. Original article:",
        label: "mckinsey.com",
        href: "https://www.mckinsey.com/business-functions/risk/our-insights/covid-19-implications-for-business",
      },
      { type: "source", text: "Learn more:", label: "seedplanter.org", href: "https://seedplanter.org" },
    ],
  },
  {
    slug: "balancing-profit-and-the-planet-circular-economy",
    title: "How can a business balance profit and the planet?",
    excerpt:
      "Making a profit while moving towards zero waste has become a puzzle for everyone, from industry giants to brand-new startups. The answer lies in the circular economy.",
    date: "2020-12-18",
    category: "Sustainability",
    lang: "en",
    translatedFrom: "Vietnamese",
    authors: "Son Nguyen",
    cover: circularCover,
    coverAlt: "Illustration comparing the linear, recycling and circular economy models, with the title in Vietnamese",
    body: [
      {
        type: "p",
        text: "Making a profit while moving towards zero waste has become a puzzle for everyone - from industry giants to startups still finding their feet. The strategy for solving it lies in the circular economy: still new, but soon to become a trend in Vietnam.",
      },
      {
        type: "p",
        text: "Look closely and you will see that the world economy mainly runs on a linear model. Resources are extracted, turned into products, consumed and then “forgotten” in landfill. This model has placed, and keeps placing, an enormous burden on the environment and on future generations. The recycling economy has its limits too: it only delays the moment a product becomes waste.",
      },
      {
        type: "p",
        text: "To reach zero waste, the most effective solution is to “bend” these two models into a closed loop. Waste is managed after use and given a new life cycle in many ways: reuse, recycling, repair, or sharing and renting products instead of owning them.",
      },
      {
        type: "p",
        text: "The truth is that the newcomers - startups and young companies - are often the ones best placed to challenge the beaten path and change how we think, produce and consume, especially through the circular economy. Take OLIO, a food-sharing app tackling food waste (in the US alone, 63 million tonnes are thrown away every year), or Library of Things, a UK startup that rents out drills, lawnmowers, projectors and other products people rarely use. These startups have not only excelled at protecting the environment, winning plenty of awards and recognition along the way. They have also built successful, sustainably profitable businesses.",
      },
      { type: "quote", text: "“Gold is tested by fire, and strength by hardship.”" },
      {
        type: "p",
        text: "Thinking in a circular way takes more than just cutting waste. It means building a complete, closed-loop process. But as the Vietnamese saying goes, gold is tested by fire, and strength by hardship. Great effort brings the value it deserves - doesn't it?",
      },
      { type: "source", text: "Learn more:", label: "seedplanter.org", href: "https://seedplanter.org" },
    ],
  },
];

/** All posts, newest first. */
export const blogPosts: BlogPost[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Estimated reading time in minutes (about 200 words a minute). */
export function readingTime(post: BlogPost): number {
  const words = post.body
    .map((b) => ("text" in b ? b.text : b.type === "callouts" ? b.items.map((i) => i.text).join(" ") : ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).toUpperCase();
}

/** True when posts exist in more than one language (shows the language filter and labels). */
export const isMultilingual = new Set(posts.map((p) => p.lang)).size > 1;

export const languageLabel: Record<BlogPost["lang"], string> = {
  en: "English",
  vi: "Tiếng Việt",
};
