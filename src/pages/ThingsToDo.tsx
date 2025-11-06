import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import natureImage from "@/assets/harar-alleyway-night.jpg";
import culturalImage from "@/assets/harari-women-ceremony.jpg";
import marketsImage from "@/assets/hyena-feeding-night.jpg";
import museumImage from "@/assets/city-peace-alleyway.jpg";
import { Coffee, PawPrint, Moon, ShoppingBag, Landmark, Utensils, Camera, Music } from "lucide-react";

const ThingsToDo = () => {
  const experiences = [
    {
      icon: Coffee,
      title: "Coffee Experience",
      description: "Join a traditional Harari coffee ceremony. Watch locals roast, grind, and brew coffee the authentic way. Enjoy the aroma and taste while learning the history behind Harar coffee, one of Ethiopia's finest.",
      image: culturalImage,
    },
    {
      icon: PawPrint,
      title: "Egile Feeding Experience",
      description: "Visit the Egile feeding area where locals interact with wild animals in harmony. This unique tradition shows the peaceful coexistence between people and nature.",
      image: natureImage,
    },
    {
      icon: Moon,
      title: "Hyena Feeding at Night",
      description: "Watch the famous Harar hyena feeding ritual after sunset. See how locals hand-feed hyenas outside the city walls, a tradition passed down for generations.",
      image: marketsImage,
    },
    {
      icon: ShoppingBag,
      title: "Market and Street Life",
      description: "Walk through Harar's colorful markets filled with spices, fabrics, baskets, and silver jewelry. Capture the energy of local trade and daily life in narrow streets.",
      image: natureImage,
    },
    {
      icon: Landmark,
      title: "Historic Sites and Museums",
      description: "Explore Harar Jugol's ancient walls, mosques, and shrines. Visit Arthur Rimbaud's house museum to see Harar's link to world history and art.",
      image: museumImage,
    },
    {
      icon: Utensils,
      title: "Food Tour",
      description: "Taste traditional Harari dishes like boko, muttaq, and harari tibs. Enjoy home-cooked meals with local families for an authentic food experience.",
      image: culturalImage,
    },
    {
      icon: Camera,
      title: "Photography Tour",
      description: "Capture the beauty of Harar's streets, doors, and faces. Early morning and late afternoon light make the best photography hours.",
      image: museumImage,
    },
    {
      icon: Music,
      title: "Cultural Night Experience",
      description: "Join a Harari music and dance evening during festivals or weddings. Experience Alaa dance, drum rhythms, and traditional songs in a joyful atmosphere.",
      image: culturalImage,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Things To Do in Harar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From cultural immersion to outdoor adventures, Harar offers diverse experiences for every traveler. Discover what makes this ancient city truly unforgettable.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <experience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-3xl mb-3">{experience.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base leading-relaxed">
                      {experience.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Guide?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Enhance your experience with a knowledgeable local guide who can show you hidden gems and share fascinating stories about Harar's heritage.
          </p>
          <a href="/plan-your-trip#guides">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Find a Tour Guide
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
