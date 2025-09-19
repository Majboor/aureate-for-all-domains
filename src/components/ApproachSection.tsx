import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ApproachSection = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const approaches = [
    {
      number: "01",
      title: "bespoke design & art direction",
      description: "we start with your brand's soul, not a template. we design a unique, memorable online experience from the ground up.",
      detail: "custom wireframes, user journey mapping, brand-first visual hierarchy"
    },
    {
      number: "02", 
      title: "custom asset creation",
      description: "we don't just ask you for \"assets.\" we create them with you. high-fidelity photography, cinematic product videos, custom graphics.",
      detail: "art direction, product photography, motion graphics, brand illustration"
    },
    {
      number: "03",
      title: "conversion through storytelling",
      description: "we replace cringe-worthy countdown timers with intelligent design and compelling copy that builds trust.",
      detail: "user psychology, narrative design, authentic social proof, trust-building elements"
    }
  ];

  return (
    <section className="section-padding overflow-hidden" id="approach" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left - Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className={`transform transition-all duration-800 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground lowercase mb-6 leading-tight">
                our anti-spam,
                <br />
                <em className="font-medium">pro-brand approach</em>
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed">
                every decision we make is designed to elevate your brand above the noise of generic e-commerce.
              </p>
            </div>
          </div>
          
          {/* Right - Scrolling Content with Enhanced Animations */}
          <div className="lg:col-span-8 space-y-20">
            {approaches.map((approach, index) => (
              <div key={index} className="group relative">
                <div className={`transform transition-all duration-800 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`} 
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                  <div className="flex items-start gap-8 cursor-pointer">
                    <span className="text-4xl lg:text-6xl font-light text-accent group-hover:text-foreground transition-all duration-500 group-hover:scale-110 transform">
                      {approach.number}
                    </span>
                    <div className="flex-1 pt-2 overflow-hidden">
                      <h3 className="text-xl lg:text-2xl font-medium text-foreground lowercase mb-4 tracking-wide group-hover:text-accent transition-colors duration-300">
                        {approach.title}
                      </h3>
                      <p className="text-body text-muted-foreground leading-relaxed max-w-lg mb-4 group-hover:text-foreground transition-colors duration-300">
                        {approach.description}
                      </p>
                      
                      {/* Hidden Detail that Reveals on Hover */}
                      <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-out">
                        <div className="pt-3 border-t border-border/30">
                          <p className="text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            {approach.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle Background Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl -mx-4 -my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;