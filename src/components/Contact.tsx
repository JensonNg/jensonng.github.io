import { useState } from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, integrate with a form service (Formspree, Netlify Forms, etc.)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.open(`mailto:hello@sonnguyen.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Let's work together</h2>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, collaborations, or just a conversation
            about sustainable marketing. Reach out anytime.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Email</p>
              <a
                href="mailto:hello@sonnguyen.com"
                className="hover:text-primary transition-colors font-medium"
              >
                hello@sonnguyen.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Location</p>
              <span className="font-medium">Stockholm, Sweden</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Linkedin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">LinkedIn</p>
              <a
                href="https://linkedin.com/in/son-nguyen-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                linkedin.com/in/son-nguyen-marketing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        {sent ? (
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Message sent!</h3>
            <p className="text-sm text-muted-foreground">
              Your email client should have opened. I'll get back to you soon.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => setSent(false)}>
              Send another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
