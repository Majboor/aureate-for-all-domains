import creativeTools from "@/assets/creative-tools.jpg";

const MissionSection = () => {
  return (
    <section className="relative">
      {/* Asymmetrical Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Content */}
        <div className="bg-muted/30 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md space-y-12">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">
                mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground leading-tight lowercase mb-8">
                to restore, protect, and nurture brands for lasting results that reveal themselves over time.
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="border border-border/30 rounded-2xl p-6 hover-subtle">
                <h3 className="font-medium text-foreground mb-2 lowercase">authenticity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  we believe in creating genuine connections between brands and their audience through honest, transparent design.
                </p>
              </div>
              
              <div className="border border-border/30 rounded-2xl p-6 hover-subtle">
                <h3 className="font-medium text-foreground mb-2 lowercase">sustainability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  we build digital experiences that stand the test of time, growing with your brand rather than requiring constant rebuilds.
                </p>
              </div>
              
              <div className="border border-border/30 rounded-2xl p-6 hover-subtle">
                <h3 className="font-medium text-foreground mb-2 lowercase">innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  we stay ahead of trends while focusing on timeless principles that ensure your brand remains relevant.
                </p>
              </div>
            </div>
            
            <button className="text-sm font-medium text-muted-foreground border border-border px-6 py-3 rounded-full hover:bg-background transition-gentle uppercase tracking-wide">
              our values
            </button>
          </div>
        </div>
        
        {/* Right - Image */}
        <div className="relative">
          <img 
            src={creativeTools}
            alt="Creative tools and workspace arrangement"
            className="w-full h-full object-cover"
          />
          
          {/* Floating Quote */}
          <div className="absolute bottom-8 left-8 right-8">
            <blockquote className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-sm text-foreground leading-relaxed italic mb-2">
                "we don't just build websites. we build relationships between brands and the people who love them."
              </p>
              <cite className="text-xs text-muted-foreground uppercase tracking-wide">
                — studio philosophy
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;