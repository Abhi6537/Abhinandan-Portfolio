
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Frontend Developer', 'React Specialist', 'Creative Coder'];

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/01f48f18-1c15-45f9-924a-7349a49ed381.png" 
                  alt="Abhinandan Ghosh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse-glow"></div>
            </div>
          </div>

          <div className="overflow-hidden mb-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up font-mono tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text font-playfair">Abhinandan Ghosh</span>
            </h1>
          </div>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-3xl font-light text-muted-foreground relative font-inter">
              {texts.map((text, index) => (
                <div
                  key={text}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    index === currentText
                      ? 'opacity-100 transform translate-y-0'
                      : index < currentText
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden mb-10">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up font-inter leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Passionate about creating stunning, interactive web experiences with modern technologies and pixel-perfect designs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-primary text-primary-foreground px-8 py-3 rounded-lg text-base font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 font-inter border-2 border-transparent hover:border-primary/30"
            >
              <Code className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 border-2 border-primary text-primary rounded-lg text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 flex items-center gap-2 font-inter backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button
          onClick={scrollToAbout}
          className="group p-3 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5 text-primary group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
