
import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'JavaScript (ES6+)', level: 92, color: 'bg-yellow-500' },
        { name: 'HTML5/CSS3', level: 96, color: 'bg-orange-500' }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 94, color: 'bg-cyan-500' },
        { name: 'Figma/Adobe XD', level: 88, color: 'bg-purple-500' },
        { name: 'Responsive Design', level: 95, color: 'bg-green-500' },
        { name: 'UI/UX Principles', level: 87, color: 'bg-pink-500' }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 82, color: 'bg-green-600' },
        { name: 'MongoDB', level: 78, color: 'bg-green-700' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
        { name: 'GraphQL', level: 80, color: 'bg-pink-600' }
      ]
    }
  ];

  const tools = [
    { icon: Globe, name: 'Git & GitHub', description: 'Version Control' },
    { icon: Smartphone, name: 'Mobile-First', description: 'Responsive Design' },
    { icon: Zap, name: 'Performance', description: 'Optimization' },
    { icon: Code, name: 'Testing', description: 'Quality Assurance' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl float-professional"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl drift-animation"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Skills & <span className="gradient-text">Expertise</span></h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              A comprehensive blend of creative design and technical expertise to deliver exceptional digital experiences
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-16 mb-20">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold font-playfair">{category.title}</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold text-lg font-inter">{skill.name}</span>
                          <span className="text-muted-foreground font-medium font-mono">{skill.level}%</span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden ${
                                animateProgress ? '' : 'w-0'
                              }`}
                              style={{ 
                                width: animateProgress ? `${skill.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 400) + (skillIndex * 200)}ms`
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                            </div>
                          </div>
                          
                          {/* Glow effect */}
                          <div
                            className={`absolute top-0 h-full ${skill.color} rounded-full opacity-30 blur-sm transition-all duration-2000 ease-out ${
                              animateProgress ? '' : 'w-0'
                            }`}
                            style={{ 
                              width: animateProgress ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 400) + (skillIndex * 200)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools & Methodologies */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-center mb-12 font-playfair">
              Tools & <span className="gradient-text">Methodologies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className={`group p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 text-center ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ animationDelay: `${index * 100 + 1200}ms` }}
                  >
                    <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 font-inter">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground font-inter">{tool.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Additional technologies */}
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-8 text-muted-foreground font-playfair">
                Additional Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Docker', 'AWS', 'Webpack', 'Vite', 'Jest', 'Cypress', 
                  'Framer Motion', 'Three.js', 'Redux', 'Zustand', 'Prisma', 'Supabase'
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-6 py-3 bg-card/40 backdrop-blur-sm border border-border/50 rounded-full text-sm hover:bg-accent/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 font-inter ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ animationDelay: `${index * 50 + 1400}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
