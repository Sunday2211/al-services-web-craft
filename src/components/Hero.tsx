
import { ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Your Trusted Partner in{" "}
          <span className="text-yellow-400">Home Improvement</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Premium handyman solutions and car detailing services throughout South Florida. 
          Quality workmanship, reliability, and unmatched customer care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button
            onClick={() => scrollToSection("#services")}
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            View Services
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#services")}
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
