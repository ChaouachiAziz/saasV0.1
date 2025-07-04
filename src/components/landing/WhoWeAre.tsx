export const WhoWeAre = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're a team of remote work enthusiasts who understand the challenges of managing distributed teams. 
              Founded in 2020, we've been building tools that help organizations thrive in the remote-first world.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our mission is to bridge the gap between trust and accountability in remote work environments. 
              We believe that with the right tools, remote teams can be more productive, engaged, and successful 
              than traditional office-based teams.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Companies Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Remote Employees Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};