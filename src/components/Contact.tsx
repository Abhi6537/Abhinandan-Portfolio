import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Phone, MapPin, Mail, Briefcase, MessageCircle } from 'lucide-react';

const Contact = () => {
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

  const handleHireMe = () => {
    const subject = 'Hiring Inquiry - Frontend Developer Position';
    const body = `Hi Abhinandan,

I'm interested in discussing a frontend developer position with you. I came across your portfolio and would like to explore potential opportunities.

Looking forward to hearing from you.

Best regards`;

    const mailtoLink = `mailto:ghoshabhinandan290@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_self');
  };

  const handleLetsTalk = () => {
    window.open('https://www.linkedin.com/in/abhinandan-ghosh-2b4a60320', '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-playfair">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 font-playfair">Let's Connect</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 font-inter">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you're a startup looking for a developer 
                or an established company seeking fresh perspectives, let's talk.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a 
                href="mailto:ghoshabhinandan290@gmail.com"
                className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl hover:bg-accent/10 transition-all duration-300 group border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 font-inter">Email</h4>
                  <p className="text-muted-foreground font-inter text-sm sm:text-base break-all">ghoshabhinandan290@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+917063488278"
                className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl hover:bg-accent/10 transition-all duration-300 group border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 font-inter">Phone</h4>
                  <p className="text-muted-foreground font-inter text-sm sm:text-base">+91 7063488278</p>
                </div>
              </a>

              <a 
                href="https://maps.app.goo.gl/sSHe6UQkKjD2Dx6f6?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl hover:bg-accent/10 transition-all duration-300 group border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 font-inter">Location</h4>
                  <p className="text-muted-foreground font-inter text-sm sm:text-base">Kolkata, India</p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-gray-700/50">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-playfair">
                  💼 Looking for a Frontend Developer?
                </h3>
                
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto font-inter">
                  Ready to bring your ideas to life with modern, responsive web solutions? 
                  Let's discuss how I can help your project succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <button
                    onClick={handleHireMe}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl min-w-[160px] font-inter"
                  >
                    <Briefcase className="w-5 h-5" />
                    <span>📧 Hire Me</span>
                  </button>
                  
                  <button
                    onClick={handleLetsTalk}
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 min-w-[160px] font-inter"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>💬 Let's Talk</span>
                  </button>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm mt-6 font-inter">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;