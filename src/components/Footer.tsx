import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Things To Do", path: "/things-to-do" },
    { name: "Invest in Harar", path: "/invest" },
    { name: "Plan Your Trip", path: "/plan-your-trip" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Visit Harar</h3>
            <p className="text-muted-foreground mb-4">
              Discover the ancient walled city of Harar, a UNESCO World Heritage site rich in culture, history, and tradition.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/visitharar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={18} />
                <span>info@visitharar.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={18} />
                <span>+251925037003</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Harar, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Visit Harar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
