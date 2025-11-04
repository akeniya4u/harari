import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/harar-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Things To Do", path: "/things-to-do" },
    { name: "Invest in Harar", path: "/invest" },
    { name: "Plan Your Trip", path: "/plan-your-trip" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Harar Logo" className="h-14 w-14 rounded-full" />
            <span className="text-xl font-bold text-[#2B8B8C]">Visit Harar</span>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-opensans text-[14px] lg:text-[16px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-[#2B8B8C]"
                    : "text-[#2B8B8C] hover:text-[#1E6F70]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#2B8B8C] hover:text-[#1E6F70] hover:bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-opensans text-[16px] font-semibold tracking-wide transition-colors ${
                  isActive(item.path)
                    ? "text-[#2B8B8C]"
                    : "text-[#2B8B8C] hover:text-[#1E6F70]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
