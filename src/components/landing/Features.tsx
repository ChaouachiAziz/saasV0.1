import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Hourly Productivity Updates",
    description: "Get real-time insights into team productivity with automated hourly reports and analytics.",
    icon: "📊"
  },
  {
    title: "Screenshot Monitoring",
    description: "Automatic screenshot capture to ensure work transparency and accountability.",
    icon: "📸"
  },
  {
    title: "Keyboard & Mouse Tracking",
    description: "Monitor activity levels through keyboard and mouse usage patterns for accurate time tracking.",
    icon: "⌨️"
  },
  {
    title: "Email Invitations",
    description: "Easily invite team members via email and manage user permissions from a central dashboard.",
    icon: "✉️"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Remote Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to monitor, track, and optimize your remote workforce productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};