import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function CVDownload() {
  // GitHub CV repository - users can view and download from GitHub
  const CV_URL = "https://github.com/JensonNg/Son_Nguyen_CV.pdf/blob/main/Son_Nguyen_CV.pdf";
  
  const handleDownload = () => {
    // Open GitHub CV page in new tab where users can download
    window.open(CV_URL, '_blank');
  };

  return (
    <section id="cv" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Get the full details of my professional background and project outcomes
            </p>
          </div>
          
          <div className="pt-2">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              PDF format • Updated January 2025 • 2 pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}