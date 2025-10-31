import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const quickLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.destinations'), path: "/destinations" },
    { name: t('nav.thingsToDo'), path: "/things-to-do" },
    { name: t('nav.invest'), path: "/invest" },
    { name: t('nav.planTrip'), path: "/plan-your-trip" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Visit Harar</h3>
            <p className="text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://web.facebook.com/p/Visit-Harar-100071139685101/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/visitharar/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
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
            <h3 className="text-lg font-semibold mb-4">{t('contact.info')}</h3>
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
          <p>&copy; {new Date().getFullYear()} Visit Harar. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
