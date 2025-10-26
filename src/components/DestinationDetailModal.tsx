import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, Phone } from "lucide-react";
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">
            {destination.name}
          </DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: 'hsl(var(--heritage-gold))' }}>
              {destination.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-2">
          {/* Location & Info */}
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: 'hsl(var(--heritage-gold))' }} />
              <span>{destination.location}</span>
            </div>
            {destination.visitingHours && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: 'hsl(var(--heritage-gold))' }} />
                <span>{destination.visitingHours}</span>
              </div>
            )}
            {destination.contact && (
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" style={{ color: 'hsl(var(--heritage-gold))' }} />
                <span>{destination.contact}</span>
              </div>
            )}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-foreground">About This Site</h3>
            <p className="text-muted-foreground leading-relaxed">
              {destination.fullDescription}
            </p>
          </div>

          {/* Map */}
          {destination.mapEmbed && (
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Location</h3>
              <div className="w-full h-64 rounded-xl overflow-hidden">
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

          {/* Gallery */}
          {destination.gallery && destination.gallery.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.gallery.map((img, idx) => (
                  <div key={idx} className="h-40 rounded-lg overflow-hidden">
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

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="text-white font-semibold"
              style={{ backgroundColor: 'hsl(var(--heritage-gold))' }}
              onClick={() => onOpenChange(false)}
            >
              Close Details
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailModal;
