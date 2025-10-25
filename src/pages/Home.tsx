import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-building.jpg";
import marketsImage from "@/assets/harar-markets.jpg";
import culturalImage from "@/assets/cultural-experience.jpg";
import { MapPin, Users, Building2, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "UNESCO World Heritage",
      description: "Explore the ancient walled city recognized by UNESCO for its cultural significance.",
    },
    {
      icon: Users,
      title: "Rich Culture",
      description: "Experience unique Harari traditions, festivals, and warm hospitality.",
    },
    {
      icon: Building2,
      title: "Historic Architecture",
      description: "Discover traditional Harari houses and the iconic Jegol Wall.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Welcome to Harar"
        subtitle="The City of Peace and Heritage"
        image={heroImage}
        ctaText="Explore Harar"
        ctaLink="#explore"
      />

      {/* About Section */}
      <section id="explore" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Discover the Heart of Ethiopia</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Harar is one of the oldest cities in Ethiopia and the fourth holiest city of Islam. Recognized as a UNESCO World Heritage site, this ancient walled city boasts over 82 mosques, 102 shrines, and countless cultural treasures. Experience the vibrant markets, traditional Harari houses, and the unique practice of hyena feeding that has captivated visitors for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-lg overflow-hidden group">
            <img
              src={marketsImage}
              alt="Harar Markets"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-primary-foreground">Vibrant Markets</h3>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden group">
            <img
              src={culturalImage}
              alt="Cultural Heritage"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-primary-foreground">Cultural Heritage</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Harar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Plan your journey to this remarkable city and discover why Harar has enchanted travelers for centuries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations">
              <Button size="lg" variant="secondary">
                Explore Attractions
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/plan-your-trip">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
