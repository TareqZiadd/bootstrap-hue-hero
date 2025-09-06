import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Remote Work",
      excerpt: "Exploring how remote work is reshaping the modern workplace and what it means for the future.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Building Sustainable Habits",
      excerpt: "A practical guide to creating lasting changes that improve your daily life and well-being.",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Lifestyle",
      featured: false
    },
    {
      id: 3,
      title: "The Art of Minimalist Design",
      excerpt: "Understanding the principles behind effective minimalist design and how to apply them.",
      author: "Emma Davis",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Design",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest insights, stories, and ideas from our community of writers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={post.category === 'Technology' ? 'default' : post.category === 'Lifestyle' ? 'secondary' : 'outline'}
                    className="w-fit"
                  >
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge className="bg-warning text-warning-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;