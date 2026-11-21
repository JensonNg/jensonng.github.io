import { Hero } from "../components/Hero";
import { ProofStrip } from "../components/home/ProofStrip";
import { SelectedWork } from "../components/home/SelectedWork";
import { WhatIDo } from "../components/home/WhatIDo";
import { Testimonials } from "../components/Testimonials";
import { WorkingWithMe } from "../components/home/WorkingWithMe";
import { ContactCTA } from "../components/ContactCTA";

// Promise, proof, then the ask.
export function HomePage() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <WhatIDo />
      <Testimonials />
      <WorkingWithMe />
      <ContactCTA />
    </main>
  );
}
