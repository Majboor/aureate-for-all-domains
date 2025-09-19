import { Button } from "@/components/ui/button";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-minimal.jpg";

const Hero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.2);
  const offsetY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="image-container w-full h-[110%]">
          <img 
            src={heroImage} 
            alt="Creative workspace" 
            className="image-responsive hover-reveal"
          />
          <div className="absolute inset-0 bg-white/40 hover:bg-white/30 transition-all duration-700" />
        </div>
      </div>
      
      {/* Content with Staggered Animation */}
      <div className="relative z-10 w-full" ref={heroRef}>
        <div className="container-custom">
          <div className={`max-w-2xl lg:max-w-3xl stagger-children ${heroInView ? 'in-view' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 sm:mb-8 leading-tight font-display">
              your brand is amazing.
              <br />
              <span className="text-muted-foreground font-light">your website makes it look cheap.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-12 leading-relaxed">
              we create elevated digital experiences for e-commerce brands who refuse to look like everyone else.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover-scale-gentle group w-full sm:w-auto"
              >
                book consultation
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover-glow backdrop-blur-sm w-full sm:w-auto"
              >
                view our work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute bottom-12 sm:bottom-20 right-4 sm:right-8 lg:right-20 max-w-xs">
          <div className={`transform transition-all duration-1000 delay-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="text-sm text-muted-foreground italic leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-soft hover-float">
              "desire converts better than discounts"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;