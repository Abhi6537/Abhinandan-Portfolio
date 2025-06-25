import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Globe, Smartphone, Zap, GitBranch } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Technologies',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 
        'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX & Tools',
      skills: [
        'Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Principles'
      ]
    },
    {
      icon: Globe,
      title: 'Additional Frontend Tools',
      skills: [
        'Framer Motion', 'Git & GitHub', 'Vite', 'Webpack', 'Firebase'
      ]
    }
  ];

  const tools = [
    { icon: GitBranch, name: 'Version Control', description: 'Git & GitHub' },
    { icon: Smartphone, name: 'Mobile-First', description: 'Responsive Design' },
    { icon: Zap, name: 'Performance', description: 'Optimization' },
    { icon: Code, name: 'Modern Stack', description: 'Latest Technologies' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // triggers earlier, better for mobile
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Background blur elements (lightweight) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              A focused set of modern technologies I use to build exceptional web experiences
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-16 mb-20">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold font-playfair">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`group px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                      >
                        <span className="font-medium text-foreground group-hover:text-primary font-inter transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools Section */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-center mb-12 font-playfair">
              Tools & <span className="text-primary">Methodologies</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className={`group p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 text-center ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
