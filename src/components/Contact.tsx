import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/sonngoc.nguyen@hyperisland.se", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours. 🎉'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setConsentGiven(false);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly at sonngoc.nguyen@hyperisland.se'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sonngoc.nguyen@hyperisland.se",
      link: "mailto:sonngoc.nguyen@hyperisland.se"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 767666509",
      link: "tel:+46767666509"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Stockholm, Sweden",
      link: null
    }
  ];

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground text-sm">
              Feel free to reach out! Fill in the form and your message will be sent directly to me.
              I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-medium text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-xs font-medium">Areas of Collaboration</div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary text-primary text-xs">Growth Marketing</Badge>
              <Badge variant="outline" className="border-secondary text-secondary text-xs">Sustainability Strategy</Badge>
              <Badge variant="outline" className="border-tertiary text-tertiary text-xs">UX Research</Badge>
              <Badge variant="outline" className="border-accent text-accent-foreground text-xs">Content Creation</Badge>
              <Badge variant="outline" className="border-secondary text-secondary text-xs">Brand Development</Badge>
            </div>
          </div>
        </div>

        <Card className="glass glass-highlight">
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="text-xs"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="text-xs"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="subject" className="text-xs">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="text-xs"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={4}
                  className="text-xs"
                  required
                />
              </div>

              {/* GDPR Consent */}
              <div className="space-y-2">
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50 accent-[#f2c94c]"
                    required
                  />
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    I consent to Son Nguyen collecting my name and email to respond to this inquiry.
                    My data will only be used for this purpose and will not be shared with third parties.
                    I can request deletion of my data at any time.{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {submitStatus.type && (
                <div className={`flex items-center gap-2 p-3 rounded-lg text-xs ${
                  submitStatus.type === 'success'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  {submitStatus.message}
                </div>
              )}

              <Button
                type="submit"
                className="w-full text-xs"
                disabled={isSubmitting || !consentGiven}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
