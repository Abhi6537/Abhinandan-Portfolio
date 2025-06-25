
import React, { useState, useEffect } from 'react';
import { ChevronDown, Briefcase, Mail } from 'lucide-react';

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
      {/* Professional animated background elements */}
      <div className="absolute inset-0">
        {/* Main background blurred shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl float-professional"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl drift-animation"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl pulse-professional"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl float-professional" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-gradient-to-l from-green-400/10 to-blue-400/10 rounded-full blur-lg drift-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden mb-8">
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in-up font-playfair">
              Hi, I'm{' '}
              <span className="gradient-text">Abhinandan Ghosh</span>
            </h1>
          </div>
          
          <div className="h-24 flex items-center justify-center mb-10">
            <div className="text-3xl md:text-5xl font-light text-muted-foreground relative font-inter">
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
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up font-inter leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Passionate about creating stunning, interactive web experiences with modern technologies and pixel-perfect designs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-primary text-primary-foreground px-10 py-5 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-border flex items-center gap-3 font-inter"
            >
              <Briefcase className="w-5 h-5" />
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border-2 border-primary text-primary rounded-xl text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 flex items-center gap-3 font-inter backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button
          onClick={scrollToAbout}
          className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronDown className="w-6 h-6 text-primary group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
