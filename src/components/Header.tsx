import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl shadow-glow">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent font-tajawal">
                ملتزم
              </h1>
              <p className="text-xs text-muted-foreground font-tajawal">نظام الفوترة الوطني</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-1 story-link font-tajawal">
              الرئيسية
            </Link>
            <a href="#blog" className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-1 story-link font-tajawal">
              المدونة
            </a>
            <a href="#about" className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-1 story-link font-tajawal">
              من نحن
            </a>
            <a href="#faq" className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-1 story-link font-tajawal">
              الأسئلة الشائعة
            </a>
            <Link to="/contact" className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-1 story-link font-tajawal">
              اتصل بنا
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="font-tajawal hover-scale">
              تسجيل دخول
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity font-tajawal hover-scale shadow-elegant">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors py-2 font-tajawal"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <a 
                href="#blog" 
                className="block text-foreground hover:text-primary transition-colors py-2 font-tajawal"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </a>
              <a 
                href="#about" 
                className="block text-foreground hover:text-primary transition-colors py-2 font-tajawal"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </a>
              <a 
                href="#faq" 
                className="block text-foreground hover:text-primary transition-colors py-2 font-tajawal"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسئلة الشائعة
              </a>
              <Link 
                to="/contact" 
                className="block text-foreground hover:text-primary transition-colors py-2 font-tajawal"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="outline" className="w-full font-tajawal">
                  تسجيل دخول
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity font-tajawal shadow-elegant">
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;