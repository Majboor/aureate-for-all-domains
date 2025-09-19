import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <div className={`max-w-3xl mx-auto text-center space-y-12 stagger-children ${isInView ? 'in-view' : ''}`}>
          <h2 className="text-display text-foreground lowercase">
            stop blending in.
            <br />
            <span className="text-muted-foreground">start standing out.</span>
          </h2>
          
          <p className="text-subheading text-muted-foreground">
            your brand deserves a digital home as unique and compelling as your products. 
            it's time to stop looking generic and start being iconic.
          </p>
          
          <div className="space-y-8">
            <h3 className="text-xl font-display font-medium text-foreground lowercase tracking-wide">
              ready to build a brand people remember and buy from?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                book your creative consultation
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">→</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-background/50 backdrop-blur-sm border border-transparent hover:border-border"
              >
                view case studies
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                free 30-minute strategy call to discuss your vision and explore how we can transform your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;