
import React from 'react';
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Abhi6537'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/abhinandan-ghosh-2b4a60320'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/abhindnghosh?igsh=MWJhcmUxY2VnZHVx&utm_source=qr'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/abhinan38886951?s=21'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ghoshabhinandan290@gmail.com'
    }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-playfair">Abhinandan Ghosh</h3>
            <p className="text-muted-foreground leading-relaxed font-inter">
              Frontend Developer & UI/UX Designer passionate about creating 
              beautiful and functional digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:animate-bounce-subtle" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold font-playfair">Quick Navigation</h4>
            <div className="space-y-3">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-inter text-left hover:translate-x-2 transform transition-transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold font-playfair">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:ghoshabhinandan290@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce-subtle" />
                <span className="font-inter">ghoshabhinandan290@gmail.com</span>
              </a>
              <a 
                href="tel:+917063488278"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="text-sm group-hover:animate-bounce-subtle">📱</span>
                <span className="font-inter">+91 7063488278</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">📍</span>
                <span className="font-inter">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-inter">
            © 2025 Abhinandan Ghosh. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-6 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 font-inter"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
