import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function CVDownload() {
  return (
    <div className="rounded-lg border border-border p-8 text-center max-w-md mx-auto">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <FileText className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold mb-2">Download my CV</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Get a full overview of my experience, education, and skills in PDF format.
      </p>
      <Button asChild>
        <a href="/cv-son-nguyen.pdf" download>
          <Download className="h-4 w-4 mr-2" />
          Download CV (PDF)
        </a>
      </Button>
    </div>
  );
}
