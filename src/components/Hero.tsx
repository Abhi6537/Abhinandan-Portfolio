
import React, { useState, useEffect } from 'react';
import { chevron-down } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['UI/UX Designer', 'Web Developer', 'Creative Thinker', 'Problem Solver'];

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
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-text-slide">
              Hi, I'm{' '}
              <span className="text-primary">Abhinandan Ghosh</span>
            </h1>
          </div>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-4xl font-light text-muted-foreground">
              {texts.map((text, index) => (
                <div
                  key={text}
                  className={`absolute transition-all duration-500 ${
                    index === currentText
                      ? 'opacity-100 transform translate-y-0'
                      : index < currentText
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Passionate about creating beautiful, functional, and user-centered digital experiences
              that make a difference.
            </p>
          </div>

          <div className="animate-scale-in">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
        >
          <chevron-down className="w-6 h-6" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
