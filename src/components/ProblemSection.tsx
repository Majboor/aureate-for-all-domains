import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className={`max-w-3xl mx-auto text-center space-y-16 stagger-children ${isInView ? 'in-view' : ''}`}>
          <h2 className="text-headline text-foreground lowercase">
            we're here to fix that.
          </h2>
          
          <div className="space-y-8">
            <p className="text-body-large text-muted-foreground">
              we are not another web development agency. we are a creative partner for e-commerce brands that refuse to look like everyone else.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-body-large text-foreground leading-relaxed">
                we believe <em className="font-medium">desire converts better than discounts</em>. 
                we build brand-first digital experiences that captivate customers and tell compelling stories 
                through superior creative direction, not aggressive sales tactics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;