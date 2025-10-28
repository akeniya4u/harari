import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import DestinationDetailModal from "@/components/DestinationDetailModal";
import heroImage from "@/assets/harar-hero.jpg";
import museumSherifImage from "@/assets/museum-sherif.jpg";
import museumAdaGarImage from "@/assets/museum-ada-gar.jpg";
import museumHararImage from "@/assets/museum-harar-living.jpg";
import museumArthurImage from "@/assets/museum-arthur.jpg";
import geyGarImage from "@/assets/museum-gey-gar.jpg";
import rimbaudImage from "@/assets/museum-rimbaud.jpg";
import marketsImage from "@/assets/harar-markets.jpg";
import culturalImage from "@/assets/cultural-experience.jpg";
import natureImage from "@/assets/nature-experience.jpg";
import culturalSongDanceImage from "@/assets/cultural-song-dance.jpg";
import hyenaFeedingImage from "@/assets/hyena-feeding.jpg";
import ayeHajiyaCenterImage from "@/assets/aye-hajiya-center.jpg";
import basketryMuseumImage from "@/assets/basketry-museum.jpg";
import gateLibertyImage from "@/assets/gate-liberty.jpg";
import gatePeaceImage from "@/assets/gate-peace.jpg";
import gateMercyImage from "@/assets/gate-mercy.jpg";
import gateWisdomImage from "@/assets/gate-wisdom.jpg";
import gateVictoryImage from "@/assets/gate-victory.jpg";
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
  label?: string;
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
    image: museumSherifImage,
    location: "Jugol District",
    category: "Museums",
    visitingHours: "9:00 AM - 5:00 PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62780.95926477595!2d42.093548!3d9.313611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bba6b9cc75ad%3A0x3d5c6e51c7c9a6db!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1234567890",
    gallery: [museumSherifImage, geyGarImage, marketsImage]
  }, {
    name: "Ada Gar Museum",
    description: "Exhibition of Harari traditional household items and architecture.",
    fullDescription: "Ada Gar Museum offers an intimate glimpse into traditional Harari household life. This beautifully preserved home showcases authentic Harari architecture with its distinctive colorful interiors, traditional furniture, and household items used by Harari families for generations. The museum provides visitors with a unique opportunity to understand the daily life, customs, and domestic traditions of the Harari people.",
    image: museumAdaGarImage,
    location: "Inside Jugol Wall",
    category: "Museums",
    visitingHours: "8:30 AM - 6:00 PM",
    gallery: [museumAdaGarImage, culturalImage]
  }, {
    name: "Harar National Museum",
    description: "Collection of Harari manuscripts, heritage items, and artifacts.",
    fullDescription: "The Harar National Museum is the premier institution preserving and displaying the cultural heritage of Harar. Its extensive collection includes rare manuscripts in Arabic and Ge'ez, traditional clothing, jewelry, weapons, and artifacts spanning centuries of Harari history. The museum offers comprehensive exhibits on Harar's unique position as a melting pot of Islamic, Ethiopian, and Somali cultures.",
    image: museumHararImage,
    location: "Near Main Gate",
    category: "Museums",
    visitingHours: "9:00 AM - 5:30 PM",
    gallery: [museumHararImage, geyGarImage, marketsImage]
  }, {
    name: "Arthur Rimbaud Collection Center",
    description: "Historic home displaying collections related to the French poet Arthur Rimbaud.",
    fullDescription: "The Arthur Rimbaud Collection Center occupies the historic house where the famous French poet lived during his time as a trader in Harar. The museum showcases Rimbaud's life in Ethiopia, his photographs, letters, and the cultural exchange between Europe and Harar during the late 19th century. It's a must-visit for literature enthusiasts and those interested in Harar's international connections.",
    image: museumArthurImage,
    location: "Central Harar",
    category: "Museums",
    visitingHours: "9:00 AM - 5:00 PM",
    gallery: [museumArthurImage, rimbaudImage, culturalImage]
  },
  // Cultural & Artistic Centers
  {
    name: "Aye Hajiya Sherro Harari Cultural Center",
    description: "Celebrating Harari women's culture, clothing, and traditional home designs.",
    fullDescription: "This cultural center is dedicated to preserving and celebrating the unique role of women in Harari culture. Exhibits showcase the intricate traditional clothing worn by Harari women, the art of Harari home decoration, and the various cultural practices passed down through generations of women. The center also hosts workshops and cultural programs highlighting women's contributions to Harari society.",
    image: ayeHajiyaCenterImage,
    location: "Within Jugol",
    category: "Cultural Sites",
    visitingHours: "8:00 AM - 6:00 PM",
    gallery: [ayeHajiyaCenterImage, geyGarImage, marketsImage]
  }, {
    name: "Basketry Museum and Abdimuhaymin Gallery",
    description: "Features Harari basket craftsmanship and traditional decorative art.",
    fullDescription: "Harar is renowned for its distinctive basket weaving tradition, and this museum celebrates this ancient craft. The Basketry Museum displays various styles of Harari baskets, from functional household items to decorative pieces. The Abdimuhaymin Gallery showcases broader Harari decorative arts, including wall hangings, textiles, and traditional designs that have become symbols of Harari identity.",
    image: basketryMuseumImage,
    location: "Jugol District",
    category: "Cultural Sites",
    visitingHours: "9:00 AM - 5:00 PM",
    gallery: [basketryMuseumImage, culturalImage, geyGarImage]
  },
  // Local Experiences
  {
    name: "Harari Cultural Song and Dancing",
    description: "Experience live performances of Harari music and traditional dance.",
    fullDescription: "Immerse yourself in the vibrant sounds and movements of Harari culture through live performances of traditional music and dance. These performances showcase the unique musical traditions of Harar, featuring traditional instruments and choreography that have been preserved for generations. Performances often include audience participation and offer a joyful introduction to Harari cultural expression.",
    image: culturalSongDanceImage,
    location: "Various Cultural Centers",
    category: "Local Experiences",
    visitingHours: "Evening performances - check schedule",
    gallery: [culturalSongDanceImage, geyGarImage, marketsImage]
  }, {
    name: "Hyena Feeding",
    description: "Witness Harar's world-famous nightly hyena feeding tradition.",
    fullDescription: "Harar is one of the few places in the world where humans and hyenas coexist peacefully. Every evening, professional hyena feeders welcome wild hyenas to the edge of town for a feeding ceremony that has become one of Harar's most famous attractions. This ancient tradition demonstrates the unique relationship between the people of Harar and these misunderstood creatures, offering visitors an unforgettable wildlife experience.",
    image: hyenaFeedingImage,
    location: "Outside City Walls",
    category: "Local Experiences",
    visitingHours: "7:00 PM - 9:00 PM (nightly)",
    gallery: [hyenaFeedingImage, geyGarImage, culturalImage]
  },
  // Gates
  {
    name: "Asu-mi Beri (Liberty Gate)",
    description: "Gateway of exchange and freedom, where Harar's connection with Zayla symbolized openness and courage.",
    fullDescription: "The Asu-mi Beri, also known as the Liberty Gate or Zayla Gate, stands as a powerful symbol of Harar's historical connections with the coastal city of Zayla. This eastern gateway represented the city's openness to trade, cultural exchange, and new ideas. Through this gate passed merchants, scholars, and travelers, bringing goods and knowledge from distant lands. The gate embodies the courage and adventurous spirit of the Harari people, who maintained vital trade routes despite challenging terrain and circumstances. Today, it reminds visitors of Harar's role as a crossroads of cultures and its enduring spirit of freedom and exchange.",
    image: gateLibertyImage,
    location: "Eastern Harar",
    category: "Gates",
    label: "Gate of Freedom",
    gallery: [gateLibertyImage, heroImage, marketsImage]
  },
  {
    name: "Sugutat Beri (Peace Gate)",
    description: "A gate symbolizing harmony, once the meeting point of traders and hyenas, reflecting coexistence and peace.",
    fullDescription: "The Sugutat Beri, or Peace Gate, is unique among Harar's five gates for its symbolism of harmony and coexistence. Located near the bustling market area, this gate has historically been a meeting point where diverse groups gathered in peace. It's particularly famous for its association with the legendary relationship between the people of Harar and the hyenas that roam the area at night. The gate represents the city's remarkable ability to maintain peace among different communities and even with the natural world. Its name and history remind visitors of the importance of harmony, understanding, and the peaceful coexistence that has defined Harar throughout the centuries.",
    image: gatePeaceImage,
    location: "Near Market Area",
    category: "Gates",
    label: "Gate of Harmony",
    gallery: [gatePeaceImage, marketsImage, natureImage]
  },
  {
    name: "Argoba Beri (Mercy Gate)",
    description: "Named after the Argoba people, representing compassion, kinship, and Harar's welcoming spirit.",
    fullDescription: "The Argoba Beri, or Mercy Gate, is named in honor of the Argoba people, one of the ethnic groups with deep historical ties to Harar. This northern entrance stands as a testament to the city's tradition of compassion, hospitality, and kinship. Throughout history, this gate welcomed travelers, pilgrims, and those seeking refuge, embodying the Islamic principle of mercy and the Harari value of welcoming strangers. The gate's name reflects the deep bonds between the various communities that have called Harar home and the city's reputation as a place of sanctuary. Visitors passing through this gate are reminded of Harar's enduring spirit of compassion and its role as a welcoming haven for all.",
    image: gateMercyImage,
    location: "Northern Entrance",
    category: "Gates",
    label: "Gate of Compassion",
    gallery: [gateMercyImage, culturalImage, geyGarImage]
  },
  {
    name: "Bedri Beri (Hakim Gate)",
    description: "Honors artisans and scholars, symbolizing wisdom, skill, and resilience.",
    fullDescription: "The Bedri Beri, also known as the Hakim Gate, celebrates the artisans and scholars who have been the backbone of Harari culture for centuries. Located on the western side of the city, this gate honors the wisdom passed down through generations of craftspeople, religious scholars, and healers (hakims). It represents the value Harar places on knowledge, craftsmanship, and the preservation of traditional skills. Through this gate, one can almost sense the centuries of learning, artistic creation, and intellectual pursuit that have made Harar a center of Islamic scholarship and traditional crafts. The gate stands as a monument to human ingenuity, the importance of education, and the resilience of cultural traditions in the face of changing times.",
    image: gateWisdomImage,
    location: "Western Harar",
    category: "Gates",
    label: "Gate of Wisdom",
    gallery: [gateWisdomImage, rimbaudImage, marketsImage]
  },
  {
    name: "Asmaadin Beri (Victory Gate)",
    description: "Named after a saint, symbolizing victory through faith and unity.",
    fullDescription: "The Asmaadin Beri, or Victory Gate, is named after a revered saint and stands as a powerful symbol of spiritual victory and communal unity. Located in southern Harar, this gate commemorates the city's historical triumphs achieved not through warfare alone, but through faith, solidarity, and collective determination. The gate represents the victories of the human spirit over adversity, the triumph of faith over doubt, and the power of a united community to overcome challenges. Throughout Harar's long history, this gate has witnessed celebrations of significant achievements and served as a reminder that true victory comes from spiritual strength and unity of purpose. Today, it inspires visitors to reflect on the enduring power of faith and community.",
    image: gateVictoryImage,
    location: "Southern Harar",
    category: "Gates",
    label: "Gate of Triumph",
    gallery: [gateVictoryImage, heroImage, culturalImage]
  }];
  const categories = ["All", "Museums", "Cultural Sites", "Local Experiences", "Gates"];
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
        {/* Gates Section Introduction */}
        {selectedCategory === "Gates" && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="font-lato text-lg text-[#212121] leading-relaxed">
              Step through the living walls of Harar Jugol and explore the Five Gates, each telling a story of courage, faith, and unity.
            </p>
          </div>
        )}

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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)'
          }} />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide text-white shadow-md ${
                  destination.category === "Gates" ? "bg-[#4CAF50]" : "bg-primary"
                }`}>
                  {destination.label || destination.category}
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
          <Button size="lg" className="bg-primary hover:bg-secondary text-white font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            Contact Us for Tours
          </Button>
        </div>
      </div>

      {/* Detail Modal */}
      <DestinationDetailModal destination={selectedDestination} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>;
};
export default Destinations;