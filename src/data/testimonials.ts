import rfslLogo from "../images/about/RFSL_logo.jpeg";
import seedPlanterLogo from "../images/about/seedplanter_logo.png";

/**
 * Testimonials, shown on the homepage and on case study pages.
 *
 * `headline` is a 3-6 word summary taken from the quote itself, so a visitor
 * can scan the cards without reading every paragraph. `logo` is optional:
 * without one, the card shows the company's initials.
 */
export interface Testimonial {
  id: string;
  headline: string;
  name: string;
  role: string;
  company: string;
  relation: string;
  text: string;
  initials: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nicholas-kelly",
    headline: "Design skills that capture any audience",
    name: "Nicholas Kelly",
    role: "Marketing Manager | Growth & Strategy",
    company: "RFSL Utbildning",
    relation: "Manager",
    text: "Son has excellent design and marketing skills that can capture any audience. He has been a highly appreciated co-worker since he manages to deliver great results within set deadlines and never complains about the workload. At RFSL Utbildning, Son has helped us create a graphic design and branding profile.",
    initials: "NK",
    logo: rfslLogo,
  },
  {
    id: "nathalie-sajda",
    headline: "Curious, reliable and dedicated",
    name: "Nathalie Sajda",
    role: "Founder",
    company: "FractalEight | Impact Consultancy",
    relation: "Client",
    text: "During 5 weeks I witnessed his insatiable curiosity and problem-solving mindset, while his diligence ensures high-quality results. As a team player, he seamlessly collaborates, fostering a positive and productive environment. Son is a reliable and dedicated professional in all aspects, and I am confident in his ability to excel in any endeavor.",
    initials: "NS",
  },
  {
    id: "karl-yves-vallin",
    headline: "Remarkable results, quickly",
    name: "Karl Yves Vallin",
    role: "Managing Director",
    company: "RFSL Utbildning AB",
    relation: "Mentor",
    text: "Son has a great willingness to learn and managed to pick up tasks quickly and efficiently. Even with cultural differences and his short time in Sweden, he managed to perform excellently in Swedish working culture. During his short internship with RFSL Utbildning, he has managed to create remarkable results for the organization.",
    initials: "KV",
    logo: rfslLogo,
  },
  {
    id: "nguyen-vo",
    headline: "Always the first to jump in",
    name: "Nguyen Vo",
    role: "ESG | Sustainability | Partnership",
    company: "Unilever",
    relation: "Collaborator",
    text: "I had the pleasure of working with Son for 6 months for the Vietnam Zero-Waste Academy. Son has been a great resource to our team with his knowledge and experience working with zero-waste projects. He has been always the first to jump in if any trainee ran into issues. Anyone looking to hire or work with him will love it, too.",
    initials: "NV",
  },
  {
    id: "nhu-que-thanh-le",
    headline: "Organised and careful",
    name: "Nhu Que Thanh Le",
    role: "Marketing Manager | SEO & Brand Growth",
    company: "Seed Planter",
    relation: "Teammate",
    text: "Son is a friendly and considerate person. He is always cheerful and easy to talk with. Professionally, I learned a lot from his management and marketing skills. Son amazed me how organized and careful he is with all the tracking documents and resources. I adore him as a friend and respect him as a coworker.",
    initials: "NL",
    logo: seedPlanterLogo,
  },
  {
    id: "dailet-naila-soriano",
    headline: "The personality of a leader",
    name: "Dailet Naila Soriano",
    role: "Communicator & Event Coordinator",
    company: "Stockholm Dual Career Network",
    relation: "Mentee",
    text: "Son has the personality of a leader: he is charismatic, resourceful, likeable, comprehensive. He has an open mind to all the things that require his attention and his kindness. Son is a great addition to any team because he knows how to seize the good things in every situation.",
    initials: "DS",
  },
];

export function getTestimonials(ids: string[]): Testimonial[] {
  return ids.flatMap((id) => testimonials.find((t) => t.id === id) ?? []);
}
