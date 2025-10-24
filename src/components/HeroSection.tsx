import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ title, subtitle, image, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <a href={ctaLink}>
            <Button size="lg" className="animate-fade-in">
              {ctaText}
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
