import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Rocket } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Kalam:wght@300;400;700&family=Dancing+Script:wght@400;500;600;700&display=swap');

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounceSubtle {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-bounce-subtle {
    animation: bounceSubtle 2s infinite;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse 3s infinite;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .font-kalam {
    font-family: 'Kalam', cursive;
  }

  .font-dancing {
    font-family: 'Dancing Script', cursive;
  }

  .font-bangers {
    font-family: 'Bangers', cursive;
  }
`;

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Frontend Developer', 'Learning Backend', 'Open Source Contributor', 'Web Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden mb-6">
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up font-dancing tracking-tight">
                <span className="font-kalam text-3xl md:text-5xl">Hi, I'm</span>{' '}
                <br className="block sm:hidden" />
                <span className="text-primary font-playfair block sm:inline mt-6 sm:mt-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>Abhinandan Ghosh</span>
              </h1>
            </div>

            <div className="h-20 flex items-center justify-center mb-8">
              <div className="text-xl md:text-2xl font-light text-muted-foreground relative font-bangers">
                {texts.map((text, index) => (
                  <div
                    key={text}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      index === currentText
                        ? 'opacity-100 transform translate-y-0 scale-100'
                        : index < currentText
                        ? 'opacity-0 transform -translate-y-full scale-95'
                        : 'opacity-0 transform translate-y-full scale-95'
                    }`}
                  >
                    <span className="text-primary font-bangers text-2xl md:text-3xl tracking-wide">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden mb-10">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up font-kalam leading-relaxed" style={{ animationDelay: '0.6s' }}>
                Second-year B.Tech IT student at JIS College of Engineering, passionate about creating innovative web solutions and user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-primary/10 text-primary px-8 py-3 rounded-lg text-base font-medium border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 font-inter backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                <span className="relative z-10">Explore Projects</span>
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 border-2 border-accent/30 text-accent rounded-lg text-base font-medium hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 font-inter backdrop-blur-sm"
              >
                <Rocket className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                About Journey
              </button>
            </div>
          </div>
        </div>

        {/* Fixed scroll down arrow positioning */}
        <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center animate-bounce-subtle">
          <button
            onClick={scrollToAbout}
            className="group p-2 sm:p-3 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-lg"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:animate-bounce transition-transform group-hover:scale-110" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;