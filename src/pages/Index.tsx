import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <AboutSection />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;