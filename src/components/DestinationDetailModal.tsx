import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface DestinationDetailModalProps {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DestinationDetailModal = ({ destination, open, onOpenChange }: DestinationDetailModalProps) => {
  if (!destination) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-background">
        {/* Hero Image Header */}
        <div className="relative h-[400px] w-full">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))' }}
          />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="mb-3">
              <span className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-primary">
                {destination.category}
              </span>
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8" style={{ background: '#FFFFFF' }}>
          {/* Location & Info */}
          <div className="flex flex-wrap gap-6 pb-6 border-b-2" style={{ borderColor: 'hsl(var(--accent) / 0.2)' }}>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-lato text-text-dark">{destination.location}</span>
            </div>
            {destination.visitingHours && (
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-lato text-text-dark">{destination.visitingHours}</span>
              </div>
            )}
            {destination.contact && (
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-lato text-text-dark">{destination.contact}</span>
              </div>
            )}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="font-poppins text-2xl font-bold mb-4 flex items-center gap-3 text-text-dark">
              <span className="w-1 h-6 bg-accent rounded"></span>
              About This Site
            </h3>
            <p className="font-lato text-muted-foreground leading-relaxed text-lg">
              {destination.fullDescription}
            </p>
          </div>

          {/* Gallery */}
          {destination.gallery && destination.gallery.length > 0 && (
            <div>
              <h3 className="font-poppins text-2xl font-bold mb-4 flex items-center gap-3 text-text-dark">
                <span className="w-1 h-6 bg-accent rounded"></span>
                Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.gallery.map((img, idx) => (
                  <div key={idx} className="h-48 rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${destination.name} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map */}
          {destination.mapEmbed && (
            <div>
              <h3 className="font-poppins text-2xl font-bold mb-4 flex items-center gap-3 text-text-dark">
                <span className="w-1 h-6 bg-accent rounded"></span>
                Location
              </h3>
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={destination.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${destination.name} Map`}
                />
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div 
            className="rounded-xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--accent) / 0.05) 100%)' }}
          >
            <h4 className="font-poppins text-xl font-bold mb-3 text-text-dark">
              Ready to Visit?
            </h4>
            <p className="font-lato text-muted-foreground mb-4">
              Contact us to arrange your visit and make the most of your time in Harar.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-white font-semibold uppercase tracking-wider"
              onClick={() => onOpenChange(false)}
            >
              Plan Your Trip
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailModal;
