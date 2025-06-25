
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'UI/UX Design', level: 95, color: 'bg-blue-500' },
    { name: 'React/Next.js', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 85, color: 'bg-purple-500' },
    { name: 'Figma/Adobe XD', level: 92, color: 'bg-pink-500' },
    { name: 'Node.js', level: 80, color: 'bg-yellow-500' },
    { name: 'GraphQL', level: 75, color: 'bg-red-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
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
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of creative design and technical expertise to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-muted-foreground font-medium">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-2000 ease-out ${
                        animateProgress ? '' : 'w-0'
                      }`}
                      style={{ 
                        width: animateProgress ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div
                    className={`absolute top-0 h-full ${skill.color} rounded-full opacity-20 blur-sm transition-all duration-2000 ease-out ${
                      animateProgress ? '' : 'w-0'
                    }`}
                    style={{ 
                      width: animateProgress ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills as tags */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              Other Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Git & GitHub', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 
                'Tailwind CSS', 'Framer Motion', 'Three.js', 'Webpack', 'Vite'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-accent hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 1200}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
