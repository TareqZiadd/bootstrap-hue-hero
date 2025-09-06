import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Stay Updated with BlogSpace
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get the latest stories, writing tips, and platform updates delivered 
                  straight to your inbox. Join over 25,000 subscribers.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <Button size="lg" className="px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. Read our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground pt-6 border-t border-border/50">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>25K+ Subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Weekly Digest</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <span>Exclusive Content</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;