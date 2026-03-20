import { FileText, Download, Award, ExternalLink, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactCTA } from "../components/ContactCTA";

interface DocumentCardProps {
  title: string;
  description: string;
  fileName: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  date?: string;
}

function DocumentCard({ title, description, fileName, icon, accentColor, glowColor, date }: DocumentCardProps) {
  const filePath = `/documents/${fileName}`;

  return (
    <div className={`glass glass-highlight rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_${glowColor}]`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={`p-3 ${accentColor} rounded-xl flex-shrink-0`}>
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            {date && (
              <p className="text-xs text-muted-foreground/70">{date}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <a href={filePath} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-primary/30 hover:bg-primary/10"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </a>
        <a href={filePath} download className="flex-1">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-[#f2994a] to-[#f2c94c] hover:from-[#e0893e] hover:to-[#e0b93e] text-black font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </a>
      </div>
    </div>
  );
}

export function CVPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            CV & <span className="text-primary">Certificates</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume, cover letter, and professional certifications
          </p>
        </div>

        {/* CV & Cover Letter Section */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
              <h2 className="text-xl font-semibold text-primary">Resume & Cover Letter</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <DocumentCard
                title="Resume / CV"
                description="Full professional background, skills, and project outcomes"
                fileName="Son-Nguyen-Resume-2026.pdf"
                icon={<FileText className="w-6 h-6 text-primary" />}
                accentColor="bg-primary/10"
                glowColor="rgba(242,201,76,0.15)"
                date="Updated 2026"
              />
              <DocumentCard
                title="Cover Letter"
                description="My motivation, approach, and what I bring to the table"
                fileName="Son-Nguyen-Cover-Letter.pdf"
                icon={<FileText className="w-6 h-6 text-secondary" />}
                accentColor="bg-secondary/10"
                glowColor="rgba(242,153,74,0.15)"
                date="Updated 2026"
              />
            </div>
          </div>

          {/* Certificates Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent"></div>
              <h2 className="text-xl font-semibold text-secondary">Upskill Diplomas</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-secondary/30 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <DocumentCard
                title="UX Design"
                description="Hyper Island Upskill Diploma in UX Design – user research, prototyping, and design thinking methodologies"
                fileName="Diploma-UX-Design.pdf"
                icon={<Award className="w-6 h-6 text-tertiary" />}
                accentColor="bg-tertiary/10"
                glowColor="rgba(242,201,76,0.15)"
                date="Hyper Island"
              />
              <DocumentCard
                title="Sustainability Change Leadership"
                description="Hyper Island Upskill Diploma in leading sustainable change – strategy, impact measurement, and organizational transformation"
                fileName="Diploma-Sustainability-Change-Leadership.pdf"
                icon={<Award className="w-6 h-6 text-primary" />}
                accentColor="bg-primary/10"
                glowColor="rgba(242,201,76,0.15)"
                date="Hyper Island"
              />
              <DocumentCard
                title="Future Scenarios"
                description="Hyper Island Upskill Diploma in Future Scenarios – foresight, trend analysis, and scenario planning"
                fileName="Diploma-Future-Scenarios.pdf"
                icon={<Award className="w-6 h-6 text-secondary" />}
                accentColor="bg-secondary/10"
                glowColor="rgba(242,153,74,0.15)"
                date="Hyper Island"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
