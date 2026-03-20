import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    name: "Karl Yves Vallin",
    role: "Managing Director",
    company: "RFSL Utbildning AB",
    relation: "Mentor",
    text: "Son has a great willingness to learn and managed to pick up tasks quickly and efficiently. Even with cultural differences and his short time in Sweden, he managed to perform excellently in Swedish working culture. During his short internship with RFSL Utbildning, he has managed to create remarkable results for the organization.",
    initials: "KV",
  },
  {
    name: "Nathalie Sajda",
    role: "Founder",
    company: "FractalEight | Impact Consultancy",
    relation: "Client",
    text: "During 5 weeks I witnessed his insatiable curiosity and problem-solving mindset, while his diligence ensures high-quality results. As a team player, he seamlessly collaborates, fostering a positive and productive environment. Son is a reliable and dedicated professional in all aspects, and I am confident in his ability to excel in any endeavor.",
    initials: "NS",
  },
  {
    name: "Nicholas Kelly",
    role: "Marketing Manager | Growth & Strategy",
    company: "RFSL Utbildning",
    relation: "Manager",
    text: "Son has excellent design and marketing skills that can capture any audience. He has been a highly appreciated co-worker since he manages to deliver great results within set deadlines and never complains about the workload. At RFSL Utbildning, Son has helped us create a graphic design and branding profile.",
    initials: "NK",
  },
  {
    name: "Nguyen Vo",
    role: "ESG | Sustainability | Partnership",
    company: "Unilever",
    relation: "Collaborator",
    text: "I had the pleasure of working with Son for 6 months for the Vietnam Zero-Waste Academy. Son has been a great resource to our team with his knowledge and experience working with zero-waste projects. He has been always the first to jump in if any trainee ran into issues. Anyone looking to hire or work with him will love it, too.",
    initials: "NV",
  },
  {
    name: "Nhu Que Thanh Le",
    role: "Marketing Manager | SEO & Brand Growth",
    company: "Seed Planter",
    relation: "Teammate",
    text: "Son is a friendly and considerate person. He is always cheerful and easy to talk with. Professionally, I learned a lot from his management and marketing skills. Son amazed me how organized and careful he is with all the tracking documents and resources. I adore him as a friend and respect him as a coworker.",
    initials: "NL",
  },
  {
    name: "Dailet Naila Soriano",
    role: "Communicator & Event Coordinator",
    company: "Stockholm Dual Career Network",
    relation: "Mentee",
    text: "Son has the personality of a leader: he is charismatic, resourceful, likeable, comprehensive. He has an open mind to all the things that require his attention and his kindness. Son is a great addition to any team because he knows how to seize the good things in every situation.",
    initials: "DS",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-2">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              What People <span className="text-primary">Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com/in/soninsthlm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors mr-3"
            >
              <Linkedin className="w-3.5 h-3.5" /> View all on LinkedIn
            </a>
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="p-2 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (isMobile ? 106 : 52.5)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 md:p-8 flex-shrink-0 flex flex-col ${
                  isMobile ? "w-full" : "w-[calc(50%-12px)]"
                }`}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.role} @ {t.company}</p>
                  </div>
                  <span className="ml-auto text-[10px] text-primary/50 border border-primary/15 rounded-full px-2 py-0.5 flex-shrink-0">
                    {t.relation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
