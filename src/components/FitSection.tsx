const FitSection = () => {
  const rightFit = [
    "you are embarrassed to send people to your current website",
    "your product is 10x better than competitors, but your site doesn't show it", 
    "you are tired of looking like a dropshipper",
    "you want to build a lasting, premium brand"
  ];
  
  const wrongFit = [
    "you are looking for the cheapest or fastest option",
    "you believe more pop-ups are the answer", 
    "you are content with a template"
  ];

  return (
    <section className="section-padding" id="fit">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-headline mb-8 text-foreground lowercase">
            are we the right fit?
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            we work with ambitious brands who value quality over quantity and understand that great design is an investment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Right Fit */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-medium text-foreground lowercase tracking-wide">
              we are the right fit if:
            </h3>
            
            <ul className="space-y-6">
              {rightFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-3 flex-shrink-0" />
                  <span className="text-body text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Wrong Fit */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-medium text-foreground lowercase tracking-wide">
              we are not the right fit if:
            </h3>
            
            <ul className="space-y-6">
              {wrongFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <span className="text-body text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;