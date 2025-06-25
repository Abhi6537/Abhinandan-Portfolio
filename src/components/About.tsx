
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Sparkles, Target, Rocket, Award, Users } from 'lucide-react';

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

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Building scalable, maintainable code with modern best practices'
    },
    {
      icon: Sparkles,
      title: 'Innovative Design',
      description: 'Creating unique, engaging interfaces that captivate users'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Delivering solutions that meet business objectives and user needs'
    },
    {
      icon: Rocket,
      title: 'Performance First',
      description: 'Optimizing every aspect for lightning-fast user experiences'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to excellence in every line of code and design element'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively to bring visions to life'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl float-professional"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl drift-animation"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative design and cutting-edge technology
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Personal info */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 backdrop-blur-sm border border-primary/20">
                    <div className="w-full h-full rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-2xl relative overflow-hidden">
                      <div className="text-8xl animate-bounce-subtle">👨‍💻</div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.label}
                    className={`text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2 font-playfair">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground font-inter">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Description */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-playfair">
                Crafting Digital Excellence
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
                <p>
                  I'm a passionate frontend developer with 5+ years of experience creating stunning, 
                  responsive web applications. My expertise lies in React, TypeScript, and modern CSS frameworks, 
                  bringing designs to life with smooth animations and seamless user interactions.
                </p>

                <p>
                  I believe in writing clean, maintainable code that not only functions flawlessly but also 
                  scales efficiently. My approach combines technical excellence with creative problem-solving 
                  to deliver solutions that exceed expectations.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always eager to take on 
                  new challenges and push the boundaries of what's possible on the web.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'GraphQL', 'MongoDB'].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg font-inter ${
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

          {/* Values grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`group p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300 font-playfair">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {value.description}
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
