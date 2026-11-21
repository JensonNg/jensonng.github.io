import { Shield, Mail, Trash2, Eye, Lock, ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function PrivacyPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-ink transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Contact
        </Link>

        {/* Page Header */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="w-6 h-6 text-brand-ink" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-medium">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: November 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            {/* Introduction */}
            <section className="space-y-3">
              <p>
                This privacy policy explains how Son Nguyen ("I", "me") handles personal data
                on this portfolio website: what you send through the contact form, and what
                happens when you browse. I am committed to
                protecting your privacy in compliance with the EU General Data Protection
                Regulation (GDPR).
              </p>
            </section>

            {/* What data */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-ink" />
                <h2 className="text-lg font-medium text-foreground">What Data I Collect</h2>
              </div>
              <p>When you submit the contact form, I collect:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Name</strong> – to address you personally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Email address</strong> – to respond to your message</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Subject & message</strong> – the content of your inquiry</span>
                </li>
              </ul>
            </section>

            {/* Browsing */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-ink" />
                <h2 className="text-lg font-medium text-foreground">When You Browse the Site</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">No cookies, analytics or tracking scripts.</strong> The fonts are served from this site, not from Google or another third party.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Hosting:</strong> the site is hosted on GitHub Pages. Like most web hosts, GitHub records technical data such as your IP address in its server logs to keep the service secure. See the{" "}<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-brand-ink hover:underline">GitHub Privacy Statement</a>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Theme choice:</strong> if you use the light/dark button, the word &quot;light&quot; or &quot;dark&quot; is saved in your browser&apos;s local storage so the site remembers it. It never leaves your device, and you can clear it in your browser settings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Video:</strong> the &quot;Get to know me&quot; video is hosted on YouTube and only loads when you press play. It uses YouTube&apos;s privacy-enhanced mode (youtube-nocookie.com); once it plays, Google&apos;s privacy policy applies.</span>
                </li>
              </ul>
            </section>

            {/* How data is processed */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-ink" />
                <h2 className="text-lg font-medium text-foreground">How Your Data Is Processed</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Your form submission is sent via <strong className="text-foreground">Formsubmit.co</strong>, a third-party form forwarding service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Formsubmit forwards the data directly to my email – <strong className="text-foreground">it does not store your submissions</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Your data is used <strong className="text-foreground">solely to respond to your inquiry</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Your data is <strong className="text-foreground">never sold, shared, or used for marketing</strong></span>
                </li>
              </ul>
            </section>

            {/* Legal basis */}
            <section className="space-y-3">
              <h2 className="text-lg font-medium text-foreground">Legal Basis</h2>
              <p>
                The legal basis for processing your data is <strong className="text-foreground">your
                consent</strong> (Article 6(1)(a) GDPR), which you provide by checking the
                consent checkbox before submitting the contact form. You may withdraw your
                consent at any time.
              </p>
            </section>

            {/* Your rights */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-brand-ink" />
                <h2 className="text-lg font-medium text-foreground">Your Rights</h2>
              </div>
              <p>Under GDPR, you have the right to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Access</strong> – request a copy of any personal data I hold about you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Rectification</strong> – request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Erasure</strong> – request deletion of your data ("right to be forgotten")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Withdraw consent</strong> – at any time, without affecting the lawfulness of prior processing</span>
                </li>
              </ul>
              <p>
                To exercise any of these rights, simply email me at the address below.
                I will respond within 30 days.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-ink" />
                <h2 className="text-lg font-medium text-foreground">Data Controller & Contact</h2>
              </div>
              <div className="glass rounded-xl p-4 space-y-1">
                <p className="text-foreground font-medium">Son Ngoc Nguyen</p>
                <p>Stockholm, Sweden</p>
                <a
                  href="mailto:sonngoc.nguyen@hyperisland.se"
                  className="text-brand-ink hover:underline"
                >
                  sonngoc.nguyen@hyperisland.se
                </a>
              </div>
            </section>
          </div>

          {/* Back to contact */}
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
