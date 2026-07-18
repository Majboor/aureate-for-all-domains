import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-sm space-y-4">
            <h2 className="text-lg font-display font-medium text-foreground lowercase tracking-wide">
              aureate
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              elevated digital experiences for e-commerce brands who refuse to
              look like everyone else.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            <button onClick={() => scrollToSection("work")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              work
            </button>
            <button onClick={() => scrollToSection("approach")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              process
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              about
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground transition-gentle lowercase tracking-wide">
              contact
            </button>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-foreground lowercase tracking-wide">
            © {year} aureate. all rights reserved.
          </p>
          <p className="text-xs text-muted-foreground lowercase tracking-wide">
            desire converts better than discounts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
