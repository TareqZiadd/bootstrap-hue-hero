import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "Write & Publish",
      description: "Create beautiful articles with our intuitive editor and publish them instantly.",
      icon: "✍️"
    },
    {
      title: "Build Community",
      description: "Connect with readers and writers who share your interests and passions.",
      icon: "👥"
    },
    {
      title: "Grow Your Audience",
      description: "Reach new readers and build a following around your unique voice and content.",
      icon: "📈"
    },
    {
      title: "Monetize Content",
      description: "Turn your writing passion into income with our built-in monetization tools.",
      icon: "💰"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">BlogSpace</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need to create, share, and grow your blog. 
            Join our community of passionate writers and engaged readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Join Over 10,000 Active Writers
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform empowers writers of all levels to share their stories, 
              connect with audiences, and build meaningful communities around their content.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Writers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">50K+</div>
                <div className="text-sm text-muted-foreground">Published Posts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning">1M+</div>
                <div className="text-sm text-muted-foreground">Monthly Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-danger">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold">Alex Thompson</div>
                  <div className="text-sm text-muted-foreground">Published Author</div>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "BlogSpace has transformed how I connect with my readers. 
                The platform is intuitive, and the community is incredibly supportive."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;