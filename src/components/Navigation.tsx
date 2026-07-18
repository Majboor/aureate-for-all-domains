import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-soft border-b border-border/20"
          : "bg-background/60"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-display font-medium text-foreground lowercase tracking-wide hover:opacity-70 transition-gentle"
            >
              aureate
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => handleNav("work")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              work
            </button>
            <button onClick={() => handleNav("approach")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              process
            </button>
            <button onClick={() => handleNav("about")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              about
            </button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium lowercase tracking-wide rounded-full px-6"
              onClick={() => handleNav("contact")}
            >
              contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
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
              <button
                onClick={() => handleNav("work")}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
              >
                work
              </button>
              <button
                onClick={() => handleNav("approach")}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
              >
                process
              </button>
              <button
                onClick={() => handleNav("about")}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide"
              >
                about
              </button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full lowercase tracking-wide rounded-full"
                onClick={() => handleNav("contact")}
              >
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
