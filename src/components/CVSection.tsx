import { FileText, Download, Award, Eye, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface DocumentCardProps {
  title: string;
  description: string;
  fileName: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  date?: string;
  onPreview: (title: string, filePath: string) => void;
}

// PDF Preview Modal
function PdfPreviewModal({
  isOpen,
  onClose,
  title,
  filePath,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  filePath: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-300 flex flex-col bg-[#1a1a1a] border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#111111]">
          <div className="flex items-center gap-3">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <a href={filePath} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7 text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="w-3 h-3 mr-1.5" />
                Open in new tab
              </Button>
            </a>
            <a href={filePath} download>
              <Button
                size="sm"
                className="text-xs h-7 bg-gradient-to-r from-[#f2994a] to-[#f2c94c] hover:from-[#e0893e] hover:to-[#e0b93e] text-black font-semibold"
              >
                <Download className="w-3 h-3 mr-1.5" />
                Download
              </Button>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[#2a2a2a]">
          <iframe
            src={`${filePath}#toolbar=1&navpanes=0`}
            className="w-full h-full border-0"
            title={`Preview: ${title}`}
          />
        </div>
      </div>
    </div>
  );
}

function DocumentCard({ title, description, fileName, icon, accentColor, glowColor, date, onPreview }: DocumentCardProps) {
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
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-primary/30 hover:bg-primary/10"
          onClick={() => onPreview(title, filePath)}
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
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

export function CVSection() {
  const [preview, setPreview] = useState<{ title: string; filePath: string } | null>(null);

  const openPreview = (title: string, filePath: string) => {
    setPreview({ title, filePath });
  };

  return (
    <>
      <div className="p-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* CV & Cover Letter */}
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
                onPreview={openPreview}
              />
              <DocumentCard
                title="Cover Letter"
                description="My motivation, approach, and what I bring to the table"
                fileName="Son-Nguyen-Cover-Letter.pdf"
                icon={<FileText className="w-6 h-6 text-secondary" />}
                accentColor="bg-secondary/10"
                glowColor="rgba(242,153,74,0.15)"
                date="Updated 2026"
                onPreview={openPreview}
              />
            </div>
          </div>

          {/* Certificates */}
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
                onPreview={openPreview}
              />
              <DocumentCard
                title="Sustainability Change Leadership"
                description="Hyper Island Upskill Diploma in leading sustainable change – strategy, impact measurement, and organizational transformation"
                fileName="Diploma-Sustainability-Change-Leadership.pdf"
                icon={<Award className="w-6 h-6 text-primary" />}
                accentColor="bg-primary/10"
                glowColor="rgba(242,201,76,0.15)"
                date="Hyper Island"
                onPreview={openPreview}
              />
              <DocumentCard
                title="Future Scenarios"
                description="Hyper Island Upskill Diploma in Future Scenarios – foresight, trend analysis, and scenario planning"
                fileName="Diploma-Future-Scenarios.pdf"
                icon={<Award className="w-6 h-6 text-secondary" />}
                accentColor="bg-secondary/10"
                glowColor="rgba(242,153,74,0.15)"
                date="Hyper Island"
                onPreview={openPreview}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <PdfPreviewModal
        isOpen={!!preview}
        onClose={() => setPreview(null)}
        title={preview?.title ?? ""}
        filePath={preview?.filePath ?? ""}
      />
    </>
  );
}
