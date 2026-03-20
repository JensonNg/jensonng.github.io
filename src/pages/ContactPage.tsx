import { Contact } from "../components/Contact";

export function ContactPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaboration? I'd love to hear from you
          </p>
        </div>

        {/* Contact Form */}
        <Contact />
      </div>
    </main>
  );
}
