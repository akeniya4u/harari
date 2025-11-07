import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen } from "lucide-react";
import harariCeremony from "@/assets/harari-traditional-ceremony.jpg";
import culturalGathering from "@/assets/cultural-gathering.jpg";
import harariAlleyway from "@/assets/harari-alleyway-white.jpg";
import harariCouple from "@/assets/harari-couple-traditional.jpg";
import cityOfPeaceWall from "@/assets/city-of-peace-wall.jpg";
import harariBaskets from "@/assets/harari-baskets-display.jpg";
import traditionalCrafts from "@/assets/traditional-crafts.jpg";
import hararAlleywayNight from "@/assets/harar-alleyway-night.jpg";
import hararHeroAbout from "@/assets/harar-hero-about.jpg";
const About = () => {
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        
        
        
      </section>

      {/* Section 1: Harari Cultural Heritage */}
      <section className="py-20 bg-muted/30">
        
      </section>

      {/* Section 2: The Harari Legacy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">The Harari Legacy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Harar, one of Ethiopia's oldest cities, was once the capital of the Adal Sultanate 
                  and a center of Islamic scholarship and trade. The Harari people built a civilization 
                  known for strong community values, artistry, and hospitality.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Harar's walled city, Jugol, is now a UNESCO World Heritage site representing centuries 
                  of cultural preservation and resilience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <a href="/documents/History_of_Harar_and_Harari-HNL.pdf" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2" />
                      View Full History
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/documents/History_of_Harar_and_Harari-HNL.pdf" download="Harar-History.pdf">
                      <Download className="mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
              
              <Card className="overflow-hidden shadow-xl animate-fade-in">
                <img src={cityOfPeaceWall} alt="Harar Jugol Wall" className="w-full h-[500px] object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cultural Expression */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Tradition in Every Detail</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Harari traditions live through music, colorful garments, cuisine, and festivals. 
                Each street in the old city tells a story of family, faith, and artistry passed down 
                through generations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-xl hover-scale">
                <img src={harariCeremony} alt="Harari wedding ceremony" className="w-full h-[400px] object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Traditional Ceremonies</h3>
                  <p className="text-muted-foreground">
                    Harari weddings and celebrations showcase the rich cultural heritage
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden shadow-xl hover-scale">
                <img src={traditionalCrafts} alt="Harari handicrafts" className="w-full h-[400px] object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Artisan Handicrafts</h3>
                  <p className="text-muted-foreground">
                    Intricate baskets and traditional crafts reflect centuries of artistry
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Modern Harar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <img src={hararAlleywayNight} alt="Harar city night view" className="w-full h-full object-cover min-h-[400px]" />
                <CardContent className="p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6">A Living Heritage in the Modern Era</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Today, Harar continues to balance history and progress. Its people embrace modern 
                    life while keeping ancient customs alive, welcoming visitors to experience a living 
                    museum where culture still breathes in every corner.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    From the bustling markets to the quiet alleyways illuminated at night, Harar remains 
                    a testament to the enduring spirit of the Harari people and their commitment to 
                    preserving their unique identity for future generations.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default About;