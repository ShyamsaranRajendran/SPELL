import { Button } from "./ui/button";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 43, 92, 0.8), rgba(0, 43, 92, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-workshop-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-workshop-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-workshop-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Regional-FAKE
            <span className="block bg-workshop-gradient-accent bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Fourth Workshop on Fake News Detection
          </h2>
          
          <h3 className="text-lg md:text-xl text-white/80 mb-8">
            in Low-Resource Languages
          </h3>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-10 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">December 18-20, 2025</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Part of SPELLL Conference</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-3 text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;