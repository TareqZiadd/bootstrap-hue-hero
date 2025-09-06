import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Share Your Stories with{" "}
                <span className="text-primary">the World</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of writers and readers in our vibrant community. 
                Discover amazing stories, share your thoughts, and connect with like-minded people.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Writing Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Explore Stories
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>10K+ Writers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span>50K+ Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-danger"></div>
                <span>1M+ Readers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="A modern workspace with laptop and coffee"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-warning/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;