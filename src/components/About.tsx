
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Sparkles, Target, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code'
    },
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces'
    },
    {
      icon: Target,
      title: 'User Focused',
      description: 'Prioritizing user experience'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="w-72 h-72 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    <span className="text-6xl animate-bounce-subtle">👨‍💻</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-pulse-glow"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Crafting Digital Experiences
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate frontend developer with 5+ years of experience creating stunning, 
                responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks, 
                bringing designs to life with smooth animations and seamless user interactions.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I love staying up-to-date with the latest web technologies and best practices. 
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
