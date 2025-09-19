import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-display font-medium text-foreground lowercase tracking-wide">
              aureate
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              work
            </a>
            <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              process
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              about
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-sm font-medium lowercase tracking-wide rounded-full px-6"
            >
              contact
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/20">
            <div className="p-6 space-y-6">
              <a 
                href="#work" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                work
              </a>
              <a 
                href="#approach" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                process
              </a>
              <a 
                href="#about" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </a>
              <Button variant="ghost" size="sm" className="w-full lowercase tracking-wide rounded-full">
                contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;