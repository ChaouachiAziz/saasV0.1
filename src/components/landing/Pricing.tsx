import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Pay-Per-Employee",
    price: "$4.99",
    period: "/month",
    subtitle: "+ $1 per employee",
    description: "Perfect for small teams and growing businesses",
    features: [
      "Basic productivity tracking",
      "Screenshot monitoring",
      "Email support",
      "Basic reporting",
      "Up to 10 employees initially"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Unlimited",
    price: "$19.99",
    period: "/month",
    subtitle: "Unlimited employees",
    description: "Best value for larger teams and enterprises",
    features: [
      "Advanced productivity analytics",
      "Real-time monitoring",
      "Priority support",
      "Advanced reporting & insights",
      "Unlimited employees",
      "API access",
      "Custom integrations"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your team size. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card ${
                plan.popular ? 'ring-2 ring-primary bg-gradient-subtle' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-xl text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  {plan.subtitle}
                </p>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "pricing" : "outline"} 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};