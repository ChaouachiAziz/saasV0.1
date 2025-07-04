import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-foreground">
            TrackTeam
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Features
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Pricing
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              About
            </Button>
            <Button variant="cta">
              Sign Up Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};