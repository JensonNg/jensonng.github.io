import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

// Modern Animated Role Text Component - Clean Text with Color Block
function AnimatedRoleText() {
  const roles = [
    { text: "Growth Marketing Strategist", accent: "text-white", bgAccent: "bg-primary" },
    { text: "Content Creator & Video Editor", accent: "text-white", bgAccent: "bg-secondary" }, 
    { text: "UX Writing Expert", accent: "text-white", bgAccent: "bg-tertiary" },
    { text: "Communications Strategist", accent: "text-white", bgAccent: "bg-quaternary" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];

  return (
    <div className="relative h-12 flex items-center overflow-hidden">
      {/* Main text content */}
      <div className="relative">
        <h2 
          className={`
            text-lg md:text-xl font-medium transition-all duration-300 ease-out transform relative
            ${isAnimating ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'}
          `}
        >
          <span className="flex items-center relative">
            {/* Small accent indicator */}
            <span className={`w-1 h-1 rounded-full ${currentRole.bgAccent} mr-3 animate-pulse opacity-70`} />
            
            {/* Text with color block background */}
            <span className="relative inline-block">
              <span 
                className={`
                  relative z-10 px-3 py-1 rounded-md transition-all duration-300 ease-out
                  ${currentRole.accent} ${currentRole.bgAccent}
                  ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                `}
              >
                {currentRole.text}
              </span>
              
              {/* Subtle glow effect */}
              <div 
                className={`
                  absolute inset-0 rounded-md blur-sm transition-all duration-300 ease-out
                  ${currentRole.bgAccent} opacity-20
                  ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-20'}
                `}
              />
            </span>
          </span>
        </h2>
      </div>
      
      {/* Minimal floating accent dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 ${currentRole.bgAccent} rounded-full animate-ping opacity-30`}
            style={{
              right: `${10 + i * 15}%`,
              top: `${40 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">       
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl leading-tight">
                  Xin Chào! </h1>
                <h1 className="text-4xl md:text-6xl leading-tight"> I'm <span className="text-primary">Son Nguyen</span>
                </h1>
                
                {/* Animated Role Section */}
                <div className="space-y-3">
                  <AnimatedRoleText />
                  
                  <div className="flex flex-wrap gap-2">
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to my journey where <span className="text-primary font-medium">growth marketing meets sustainable impact</span>. 
                With a Master's in Environmental Science and expertise in UX Writing + Communications Strategy, I help brands grow 
                authentically while making a positive difference. 🌱📈
              </p>
              
              <div className="glass glass-highlight rounded-xl p-4">
                <p className="text-sm leading-relaxed">
                  <span className="font-medium text-primary">My creative toolkit?</span> From short-form video and content creation 
                  to strategic UX writing and communications, I turn complex ideas into compelling brand stories. Whether it's Instagram 
                  Reels, campaign videos, or conversion-focused copy – I create content that doesn't just convert, it connects. 🎬💫
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Video Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform rotate-2"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/s7e06VN60JY?rel=0&modestbranding=1&controls=1&showinfo=0" 
                    title="Son Nguyen - Growth Marketing Strategist Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-2xl shadow-lg w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="glass glass-highlight rounded-xl p-4 space-y-4">
              <div className="text-center">
                <p className="text-sm font-medium text-foreground mb-3">Ready to explore?</p>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button 
                      className="bg-primary hover:bg-primary/90 flex-1" 
                      onClick={() => scrollToSection('creative-work')}
                    >
                      View Creative Work
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white flex-1" 
                      onClick={() => scrollToSection('projects')}
                    >
                      View Projects
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white flex-1" 
                      onClick={() => scrollToSection('contact')}
                    >
                      Contact Me
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex-1"
                      onClick={() => scrollToSection('cv')}
                    >
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="border-t border-primary/10 pt-4">
                <p className="text-xs font-medium text-foreground text-center mb-3">Connect with me</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://linkedin.com/in/soninsthlm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 glass hover:bg-primary hover:text-white rounded-lg transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:sonngoc.nguyen@hyperisland.se"
                    className="p-3 glass hover:bg-primary hover:text-white rounded-lg transition-all"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/foodstuckers.sthlm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 glass hover:bg-primary hover:text-white rounded-lg transition-all"
                    title="Instagram @foodstuckers.sthlm"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 hover:bg-muted rounded-full transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}