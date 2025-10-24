import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import geyGarImage from "@/assets/museum-gey-gar.jpg";
import rimbaudImage from "@/assets/museum-rimbaud.jpg";
import marketsImage from "@/assets/harar-markets.jpg";

const Destinations = () => {
  const museums = [
    {
      name: "Harari Living Room (Gey Gar)",
      description: "Experience authentic Harari home life with traditional colorful baskets and cultural artifacts.",
      image: geyGarImage,
      location: "Inside Jugol Wall",
    },
    {
      name: "House of Arthur Rimbaud",
      description: "Historic home of the French poet who lived in Harar, showcasing colonial architecture.",
      image: rimbaudImage,
      location: "Central Harar",
    },
    {
      name: "Harari National Museum",
      description: "Comprehensive collection of Harari cultural heritage, manuscripts, and historical artifacts.",
      image: geyGarImage,
      location: "Near Main Gate",
    },
    {
      name: "Sherif Harar City Museum",
      description: "Explore the history of Harar's Islamic heritage and its role as a center of learning.",
      image: rimbaudImage,
      location: "Jugol District",
    },
    {
      name: "Harar Museum",
      description: "Diverse collection showcasing the city's rich cultural tapestry and traditions.",
      image: geyGarImage,
      location: "Main Square",
    },
    {
      name: "Harar Jegol Wall",
      description: "The iconic 16th-century fortification surrounding the old city with five historic gates.",
      image: rimbaudImage,
      location: "Surrounding Old City",
    },
    {
      name: "Vibrant Markets of Harar",
      description: "Bustling traditional markets filled with spices, textiles, and local crafts.",
      image: marketsImage,
      location: "Various Locations",
    },
    {
      name: "Local Dishes Experience",
      description: "Taste authentic Harari cuisine including special coffee ceremonies and traditional meals.",
      image: marketsImage,
      location: "Throughout the City",
    },
    {
      name: "Harari Architecture",
      description: "Tour the unique traditional Harari houses with their distinctive colorful interiors.",
      image: geyGarImage,
      location: "Within Jugol",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Top Attractions in Harar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the rich cultural heritage and historic sites of the walled city. Each destination offers a unique glimpse into Harar's fascinating history and traditions.
          </p>
        </div>

        {/* Museums Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {museums.map((museum, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={museum.image}
                  alt={museum.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{museum.name}</CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {museum.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{museum.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Location Map</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62780.95926477595!2d42.093548!3d9.313611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bba6b9cc75ad%3A0x3d5c6e51c7c9a6db!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harar Museums Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
