import React, { useEffect, useRef, useState } from 'react';
import { Code2, Award, Trophy, Camera, Users, Gamepad2 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // lowered for earlier trigger on mobile
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const achievements = [
    { number: '1st', label: 'Runner-up JISTECH' },
    { number: '2', label: 'Live Projects' },
    { number: 'B.Tech', label: 'IT Student' },
    { number: '100%', label: 'Passion Driven' }
  ];

  const projects = [
    {
      title: 'Mess Sathi',
      description: 'A web platform connecting students with local mess services, featuring owner dashboards and room type filters.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      achievement: '1st Runner-up at JISTECH App E-Teaser'
    },
    {
      title: 'GharKaKaam',
      description: 'Service platform connecting households with verified workers like plumbers and electricians with chatbot support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Dialogflow'],
      achievement: 'Full-stack project with AI integration'
    }
  ];

  const currentlyLearning = [
    { name: 'Kotlin', progress: 70 },
    { name: 'Express.js', progress: 60 },
    { name: 'Firebase Auth', progress: 80 },
    { name: 'Android Dev', progress: 50 }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-br from-muted/20 via-background to-primary/10 relative overflow-hidden"
    >
      {/* Background blur with toned-down blur size */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left - Info */}
            <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
                <p className="text-2xl font-semibold text-foreground">
                  Hi, I'm Abhinandan Ghosh — a first-year B.Tech IT student at{' '}
                  <span className="text-primary">JIS College of Engineering</span> passionate about frontend and full-stack development.
                </p>
                <p>
                  I was the <span className="text-accent font-semibold">1st runner-up at JISTECH App E-Teaser</span> for my project 'Mess Sathi' — 
                  a web platform that connects students with local mess services.
                </p>
                <p>
                  I enjoy building fast, user-friendly apps with React, Firebase, Tailwind CSS, and Node.js. Currently, I'm exploring Android development using Kotlin and backend with Express.
                </p>
                <p>Outside of tech, I enjoy photography 📸, playing cricket 🏏, and watching movies 🎬.</p>
                <p className="text-primary font-semibold text-xl">Let's build something awesome together! </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((a, i) => (
                  <div
                    key={a.label}
                    className={`text-center p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2 font-playfair">{a.number}</div>
                    <div className="text-sm text-muted-foreground font-inter">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Learning Progress */}
            <div className={`space-y-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-3xl font-bold mb-6 text-primary font-playfair">Currently Learning</h3>
              <div className="space-y-6">
                {currentlyLearning.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold font-inter">{skill.name}</span>
                      <span className="text-muted-foreground font-mono">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out"
                        style={{
                          width: isVisible ? `${skill.progress}%` : '0%',
                          transitionDelay: `${index * 150 + 600}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 font-playfair">When I'm not coding...</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-card/30 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-sm font-inter">Photography</span>
                  </div>
                  <div className="text-center p-4 bg-card/30 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                    <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-sm font-inter">Cricket</span>
                  </div>
                  <div className="text-center p-4 bg-card/30 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                    <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-sm font-inter">Movies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-center mb-12 font-playfair">
              Project <span className="text-primary">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-accent" />
                    <h4 className="text-xl font-semibold font-playfair">{project.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                    <Trophy className="w-4 h-4" />
                    {project.achievement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
