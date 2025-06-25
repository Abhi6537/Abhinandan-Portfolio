
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Frontend Developer', 'React Specialist', 'UI/UX Designer', 'Creative Coder'];

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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-20 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
        <div className="p-4 bg-primary/10 rounded-full">
          <Code className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>
      <div className="absolute top-32 right-32 animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
        <div className="p-4 bg-accent/10 rounded-full">
          <Palette className="w-8 h-8 text-accent animate-wiggle" />
        </div>
      </div>
      <div className="absolute bottom-32 right-20 animate-bounce-subtle" style={{ animationDelay: '2.5s' }}>
        <div className="p-4 bg-primary/10 rounded-full">
          <Zap className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up">
              Hi, I'm{' '}
              <span className="gradient-text">Abhinandan Ghosh</span>
            </h1>
          </div>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-4xl font-light text-muted-foreground relative">
              {texts.map((text, index) => (
                <div
                  key={text}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    index === currentText
                      ? 'opacity-100 transform translate-y-0 scale-100'
                      : index < currentText
                      ? 'opacity-0 transform -translate-y-full scale-95'
                      : 'opacity-0 transform translate-y-full scale-95'
                  }`}
                >
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Passionate about creating stunning, interactive web experiences with modern technologies and pixel-perfect designs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button
          onClick={scrollToAbout}
          className="group p-3 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-primary group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
