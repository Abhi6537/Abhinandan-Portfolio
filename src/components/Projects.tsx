
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A modern admin dashboard for e-commerce platforms with real-time analytics and inventory management.',
      longDescription: 'Built with React, TypeScript, and Tailwind CSS, this dashboard provides comprehensive analytics, user management, and real-time data visualization. Features include drag-and-drop functionality, advanced filtering, and responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'AI-Powered Chat App',
      description: 'Real-time messaging application with AI-powered smart replies and sentiment analysis.',
      longDescription: 'A cutting-edge chat application featuring AI integration for smart replies, sentiment analysis, and real-time translation. Built with modern web technologies for optimal performance.',
      tech: ['Next.js', 'Socket.io', 'OpenAI API', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components and detailed documentation.',
      longDescription: 'A complete design system library featuring 50+ components, detailed documentation, and interactive examples. Includes dark/light themes, accessibility features, and TypeScript support.',
      tech: ['Storybook', 'React', 'Figma', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and modern design principles.',
      longDescription: 'A fully responsive portfolio website showcasing modern design principles, smooth animations, and optimal performance. Features include dark/light mode, contact forms, and project galleries.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                        <Github className="w-5 h-5 text-black" />
                      </button>
                      <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-sm rounded-full"
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
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
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
