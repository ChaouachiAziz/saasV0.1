const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your account in less than 2 minutes. No setup fees, just choose your plan and get started.",
    icon: "👤"
  },
  {
    step: "2", 
    title: "Add Employees",
    description: "Invite your team members via email. They'll receive setup instructions and can start immediately.",
    icon: "👥"
  },
  {
    step: "3",
    title: "Track Work",
    description: "Monitor productivity, view reports, and gain insights into your team's work patterns and efficiency.",
    icon: "📈"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with remote team tracking in three simple steps
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-primary z-0 transform translate-x-4" />
                )}
                
                <div className="relative z-10 bg-background rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                  {/* Step number */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};