import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen } from "lucide-react";
import harariBaskets from "@/assets/harari-baskets-display.jpg";
import harariCouple from "@/assets/harari-couple-traditional.jpg";
import harariWoman from "@/assets/harari-woman-traditional.jpg";
import harariCeremony from "@/assets/harari-ceremony-gate.jpg";
import harariAlleyway from "@/assets/harari-alleyway-white.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Harar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the rich history and vibrant culture of one of Ethiopia's most ancient cities
          </p>
        </div>

        {/* History of Harar Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">History of Harar</h2>
          </div>

          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Harar, one of Ethiopia's most historic cities, has been a center of Islamic scholarship, 
                trade, and cultural exchange for over a thousand years. Its walled old town, known as Jugol, 
                reflects a deep mix of African and Islamic heritage and is recognized by UNESCO as a World 
                Heritage Site.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 sm:flex-initial"
                  onClick={() => window.open('/documents/History_of_Harar_and_Harari-HNL.pdf', '_blank')}
                >
                  <BookOpen className="mr-2" />
                  View Full History of Harar
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="flex-1 sm:flex-initial"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/documents/History_of_Harar_and_Harari-HNL.pdf';
                    link.download = 'History_of_Harar_and_Harari-HNL.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cultural Images Gallery */}
        <section className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Harari Cultural Heritage</h3>
          
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src={harariCeremony} 
              alt="Harari people in traditional dress during a cultural ceremony at the gate" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <p className="text-center text-muted-foreground mt-4 italic">
              Harar's cultural identity lives through its architecture, colorful traditions, 
              and the strong community spirit of the Harari people.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img 
              src={harariAlleyway} 
              alt="Traditional Harari alleyway with distinctive architecture" 
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
            <img 
              src={harariBaskets} 
              alt="Display of traditional Harari colorful baskets and crafts" 
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src={harariCouple} 
              alt="Harari couple in traditional wedding attire" 
              className="w-full h-[280px] object-cover rounded-xl shadow-lg"
            />
            <img 
              src={harariWoman} 
              alt="Harari woman wearing traditional embroidered dress" 
              className="w-full h-[280px] object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-center bg-card rounded-xl shadow-lg p-6">
              <p className="text-center text-sm text-muted-foreground">
                The vibrant colors and intricate designs of Harari traditional dress reflect 
                centuries of artistic heritage
              </p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">The Harari Legacy</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Harari people, one of Ethiopia's Semitic-speaking communities, built a strong 
                civilization that thrived through trade and faith. Harar became the capital of the 
                Adal Sultanate and a symbol of resistance, education, and religious influence across 
                the Horn of Africa. Its legacy continues through its unique traditions, social systems, 
                and heritage preserved by the Harari Regional State.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
