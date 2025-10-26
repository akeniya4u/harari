import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import DestinationDetailModal from "@/components/DestinationDetailModal";
import heroImage from "@/assets/harar-hero.jpg";
import geyGarImage from "@/assets/museum-gey-gar.jpg";
import rimbaudImage from "@/assets/museum-rimbaud.jpg";
import marketsImage from "@/assets/harar-markets.jpg";
import culturalImage from "@/assets/cultural-experience.jpg";
import natureImage from "@/assets/nature-experience.jpg";
interface Destination {
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  location: string;
  category: string;
  visitingHours?: string;
  contact?: string;
  mapEmbed?: string;
  gallery?: string[];
}
const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const destinations: Destination[] = [
  // Museums
  {
    name: "Sherif Harar City Museum",
    description: "History of Harar's Islamic heritage and learning center.",
    fullDescription: "The Sherif Harar City Museum stands as a testament to Harar's rich Islamic heritage and its role as a center of Islamic learning in East Africa. The museum houses an extensive collection of Islamic manuscripts, religious artifacts, and historical documents that chronicle the city's spiritual and educational legacy. Visitors can explore exhibits showcasing the evolution of Islamic scholarship in Harar and its influence on the broader region.",
    image: geyGarImage,
    location: "Jugol District",
    category: "Museums",
    visitingHours: "9:00 AM - 5:00 PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62780.95926477595!2d42.093548!3d9.313611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bba6b9cc75ad%3A0x3d5c6e51c7c9a6db!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1234567890",
    gallery: [geyGarImage, rimbaudImage, marketsImage]
  }, {
    name: "Ada Gar Museum",
    description: "Exhibition of Harari traditional household items and architecture.",
    fullDescription: "Ada Gar Museum offers an intimate glimpse into traditional Harari household life. This beautifully preserved home showcases authentic Harari architecture with its distinctive colorful interiors, traditional furniture, and household items used by Harari families for generations. The museum provides visitors with a unique opportunity to understand the daily life, customs, and domestic traditions of the Harari people.",
    image: geyGarImage,
    location: "Inside Jugol Wall",
    category: "Museums",
    visitingHours: "8:30 AM - 6:00 PM",
    gallery: [geyGarImage, culturalImage]
  }, {
    name: "Harar National Museum",
    description: "Collection of Harari manuscripts, heritage items, and artifacts.",
    fullDescription: "The Harar National Museum is the premier institution preserving and displaying the cultural heritage of Harar. Its extensive collection includes rare manuscripts in Arabic and Ge'ez, traditional clothing, jewelry, weapons, and artifacts spanning centuries of Harari history. The museum offers comprehensive exhibits on Harar's unique position as a melting pot of Islamic, Ethiopian, and Somali cultures.",
    image: rimbaudImage,
    location: "Near Main Gate",
    category: "Museums",
    visitingHours: "9:00 AM - 5:30 PM",
    gallery: [rimbaudImage, geyGarImage, marketsImage]
  }, {
    name: "Amir Abdulahi Museum",
    description: "Dedicated to the legacy of Amir Abdulahi — showcasing Harar's governance and defense history.",
    fullDescription: "This museum honors Amir Abdulahi, one of Harar's most important historical figures. The exhibits detail the political and military history of Harar, showcasing weapons, uniforms, documents, and personal effects related to the defense and governance of the city. Visitors gain insight into the challenges faced by Harar's rulers and the strategies employed to maintain the city's independence.",
    image: geyGarImage,
    location: "Central Harar",
    category: "Museums",
    visitingHours: "9:00 AM - 4:00 PM",
    gallery: [geyGarImage, rimbaudImage]
  }, {
    name: "Arthur Rimbaud Collection Center",
    description: "Historic home displaying collections related to the French poet Arthur Rimbaud.",
    fullDescription: "The Arthur Rimbaud Collection Center occupies the historic house where the famous French poet lived during his time as a trader in Harar. The museum showcases Rimbaud's life in Ethiopia, his photographs, letters, and the cultural exchange between Europe and Harar during the late 19th century. It's a must-visit for literature enthusiasts and those interested in Harar's international connections.",
    image: rimbaudImage,
    location: "Central Harar",
    category: "Museums",
    visitingHours: "9:00 AM - 5:00 PM",
    gallery: [rimbaudImage, geyGarImage, culturalImage]
  },
  // Cultural & Artistic Centers
  {
    name: "Aye Hajiya Sherro Harari Cultural Center",
    description: "Celebrating Harari women's culture, clothing, and traditional home designs.",
    fullDescription: "This cultural center is dedicated to preserving and celebrating the unique role of women in Harari culture. Exhibits showcase the intricate traditional clothing worn by Harari women, the art of Harari home decoration, and the various cultural practices passed down through generations of women. The center also hosts workshops and cultural programs highlighting women's contributions to Harari society.",
    image: culturalImage,
    location: "Within Jugol",
    category: "Cultural Sites",
    visitingHours: "8:00 AM - 6:00 PM",
    gallery: [culturalImage, geyGarImage, marketsImage]
  }, {
    name: "Basketry Museum and Abdimuhaymin Gallery",
    description: "Features Harari basket craftsmanship and traditional decorative art.",
    fullDescription: "Harar is renowned for its distinctive basket weaving tradition, and this museum celebrates this ancient craft. The Basketry Museum displays various styles of Harari baskets, from functional household items to decorative pieces. The Abdimuhaymin Gallery showcases broader Harari decorative arts, including wall hangings, textiles, and traditional designs that have become symbols of Harari identity.",
    image: marketsImage,
    location: "Jugol District",
    category: "Cultural Sites",
    visitingHours: "9:00 AM - 5:00 PM",
    gallery: [marketsImage, culturalImage, geyGarImage]
  },
  // Local Experiences
  {
    name: "Harari Cultural Song and Dancing",
    description: "Experience live performances of Harari music and traditional dance.",
    fullDescription: "Immerse yourself in the vibrant sounds and movements of Harari culture through live performances of traditional music and dance. These performances showcase the unique musical traditions of Harar, featuring traditional instruments and choreography that have been preserved for generations. Performances often include audience participation and offer a joyful introduction to Harari cultural expression.",
    image: culturalImage,
    location: "Various Cultural Centers",
    category: "Local Experiences",
    visitingHours: "Evening performances - check schedule",
    gallery: [culturalImage, geyGarImage, marketsImage]
  }, {
    name: "Hyena Feeding",
    description: "Witness Harar's world-famous nightly hyena feeding tradition.",
    fullDescription: "Harar is one of the few places in the world where humans and hyenas coexist peacefully. Every evening, professional hyena feeders welcome wild hyenas to the edge of town for a feeding ceremony that has become one of Harar's most famous attractions. This ancient tradition demonstrates the unique relationship between the people of Harar and these misunderstood creatures, offering visitors an unforgettable wildlife experience.",
    image: natureImage,
    location: "Outside City Walls",
    category: "Local Experiences",
    visitingHours: "7:00 PM - 9:00 PM (nightly)",
    gallery: [natureImage, geyGarImage, culturalImage]
  }, {
    name: "Enay Abida Handcraft College",
    description: "Local crafts training center — learn about Harari weaving, pottery, and handmade goods.",
    fullDescription: "The Enay Abida Handcraft College is both a training institution and a living museum of Harari craftsmanship. Visitors can observe artisans at work, learning traditional techniques of weaving, pottery, basket making, and other crafts. The college offers workshops for those interested in trying their hand at these ancient arts, and a shop where visitors can purchase authentic handmade Harari goods directly from the artisans.",
    image: marketsImage,
    location: "Jugol District",
    category: "Local Experiences",
    visitingHours: "9:00 AM - 4:00 PM (Mon-Fri)",
    gallery: [marketsImage, culturalImage, geyGarImage]
  }];
  const categories = ["All", "Museums", "Cultural Sites", "Local Experiences"];
  const filteredDestinations = selectedCategory === "All" ? destinations : destinations.filter(dest => dest.category === selectedCategory);
  const handleViewDetails = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img src={heroImage} alt="Explore Harar's Destinations" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.15))'
      }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-4">
            Explore Harar's Destinations
          </h1>
          <p className="font-lato text-xl md:text-2xl text-white/95 max-w-2xl mb-8">
            Step into centuries of culture, history, and living tradition.
          </p>
          <Button size="lg" className="bg-primary hover:bg-secondary text-white font-semibold uppercase tracking-wider transition-all duration-300">
            Explore More
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 ${selectedCategory === category ? "bg-primary text-white shadow-lg" : "border-2 border-primary text-primary hover:bg-secondary hover:text-white hover:border-secondary"}`}>
              {category}
            </button>)}
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDestinations.map((destination, index) => <div key={index} className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1" onClick={() => handleViewDetails(destination)}>
              {/* Background Image */}
              <img src={destination.image} alt={destination.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.15))'
          }} />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide text-white bg-primary shadow-md">
                  {destination.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="font-poppins text-2xl font-bold mb-2 leading-tight">
                  {destination.name}
                </h3>
                <div className="flex items-start gap-2 mb-3 text-white/90">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="font-lato text-sm">{destination.location}</span>
                </div>
                <p className="font-lato text-sm leading-relaxed text-white/85 line-clamp-2">
                  {destination.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl p-12 text-center" style={{
        background: 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--primary) / 0.1) 100%)'
      }}>
          <h3 className="font-poppins text-3xl font-bold mb-4 text-foreground">
            Plan Your Visit to Harar
          </h3>
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Each destination offers a unique window into Harar's rich cultural tapestry. We recommend spending at least 2-3 days to fully experience all these sites.
          </p>
          <Button size="lg" className="uppercase tracking-wider font-semibold bg-[#1f5469] text-slate-100">
            Contact Us for Tours
          </Button>
        </div>
      </div>

      {/* Detail Modal */}
      <DestinationDetailModal destination={selectedDestination} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>;
};
export default Destinations;