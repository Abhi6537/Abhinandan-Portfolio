
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Youtube } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Mess Sathi',
      description: 'A web app designed to connect students with local mess services, featuring mess listings, room type filters, and owner dashboards.',
      longDescription: 'Mess Sathi is a comprehensive web platform that bridges the gap between students and local mess services. Features include detailed mess listings, advanced filtering by room type and location, dedicated owner dashboards for mess management, and a user-friendly interface built with React and Tailwind CSS. This project earned me the 1st runner-up position at the JISTECH App E-Teaser competition.',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'JavaScript', 'Figma'],
      image: '/lovable-uploads/8bf3e71a-0d47-4551-8268-2e0b93ead3d3.png',
      github: {
        frontend: 'https://github.com/Abhi6537/MessSathi-Frontend.git',
        backend: 'https://github.com/Abhi6537/MessSathi-Backend.git'
      },
      demo: null
    },
    {
      id: 2,
      title: 'GharKaKaam',
      description: 'A service-based platform connecting households with verified workers like plumbers, electricians, and cleaners with chatbot support.',
      longDescription: 'GharKaKaam is a comprehensive home service platform that connects households with verified professionals including plumbers, electricians, cleaners, and more. The platform features an intelligent chatbot powered by Dialogflow for customer support, real-time booking system, service provider verification, and a seamless user experience. Built with a full-stack approach using React, Node.js, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Dialogflow', 'Figma'],
      image: '/lovable-uploads/1f25ade4-641a-428d-ab1a-7a31c7ad9146.png',
      github: {
        main: 'https://github.com/Abhi6537/GharKaKaam.git'
      },
      demo: 'https://youtu.be/28vppcNVrNU'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Real projects I've built during my journey as a developer, showcasing my skills in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-semibold">Click to view details</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors font-playfair">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 font-inter">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4 font-playfair">{project.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-inter">
                        {project.longDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {project.id === 1 ? (
                          <>
                            <a
                              href={project.github.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform font-inter"
                            >
                              <Github className="w-5 h-5" />
                              <span>Frontend Code</span>
                            </a>
                            <a
                              href={project.github.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-inter"
                            >
                              <Github className="w-5 h-5" />
                              <span>Backend Code</span>
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href={project.github.main}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform font-inter"
                            >
                              <Github className="w-5 h-5" />
                              <span>View Code</span>
                            </a>
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-inter"
                              >
                                <Youtube className="w-5 h-5" />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
