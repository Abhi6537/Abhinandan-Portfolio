
import React, { useEffect, useRef, useState } from 'react';

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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-semibold mb-4">
                Crafting Digital Experiences with Passion
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate UI/UX designer and web developer with over 5 years of experience 
                creating digital solutions that bridge the gap between design and functionality. 
                My journey began with a fascination for how design can solve real-world problems.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in creating intuitive user interfaces, responsive web applications, 
                and memorable user experiences. When I'm not coding or designing, you'll find me 
                exploring new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {['JavaScript', 'React', 'TypeScript', 'Figma', 'Node.js'].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 delay-${(index + 1) * 100} ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
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

export default About;
