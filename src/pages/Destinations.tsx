import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import geyGarImage from "@/assets/museum-gey-gar.jpg";
import rimbaudImage from "@/assets/museum-rimbaud.jpg";
import marketsImage from "@/assets/harar-markets.jpg";

const Destinations = () => {
  const museums = [
    {
      name: "Harari Living Room (Gey Gar)",
      description: "Experience authentic Harari home life and cultural artifacts",
      image: geyGarImage,
      location: "Inside Jugol Wall",
      category: "Historical & Cultural Sites",
    },
    {
      name: "House of Arthur Rimbaud",
      description: "Historic home of the French poet who lived in Harar",
      image: rimbaudImage,
      location: "Central Harar",
      category: "Historical & Cultural Sites",
    },
    {
      name: "Harari National Museum",
      description: "Collection of Harari heritage, manuscripts, and artifacts",
      image: geyGarImage,
      location: "Near Main Gate",
      category: "Museums",
    },
    {
      name: "Sherif Harar City Museum",
      description: "History of Harar's Islamic heritage and learning center",
      image: rimbaudImage,
      location: "Jugol District",
      category: "Museums",
    },
    {
      name: "Harar Museum",
      description: "Diverse collection showcasing the city's rich traditions",
      image: geyGarImage,
      location: "Main Square",
      category: "Museums",
    },
    {
      name: "Harar Jegol Wall",
      description: "Iconic 16th-century fortification with five historic gates",
      image: rimbaudImage,
      location: "Surrounding Old City",
      category: "Historical & Cultural Sites",
    },
    {
      name: "Vibrant Markets of Harar",
      description: "Traditional markets filled with spices, textiles, and crafts",
      image: marketsImage,
      location: "Various Locations",
      category: "Local Experiences",
    },
    {
      name: "Local Dishes Experience",
      description: "Authentic Harari cuisine and traditional coffee ceremonies",
      image: marketsImage,
      location: "Throughout the City",
      category: "Local Experiences",
    },
    {
      name: "Harari Architecture",
      description: "Unique traditional houses with distinctive colorful interiors",
      image: geyGarImage,
      location: "Within Jugol",
      category: "Historical & Cultural Sites",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Discover Harar
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the rich cultural heritage and historic sites of the ancient walled city
          </p>
        </div>

        {/* Destinations Grid - Image Forward Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {museums.map((museum, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={museum.image}
                  alt={museum.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white border-0 px-3 py-1 text-xs font-medium">
                    {museum.category}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {museum.name}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span>{museum.location}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                    {museum.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Location Map
          </h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
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
