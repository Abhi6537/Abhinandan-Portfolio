import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create proper mailto link
    const subject = formData.subject || 'Contact from Portfolio Website';
    const body = `Hi Abhinandan,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:ghoshabhinandan290@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_self');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
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

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-border/50">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 font-playfair">Send a Message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl bg-background/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 font-inter text-sm sm:text-base ${
                        errors.name ? 'border-destructive' : 'border-border focus:border-primary'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs sm:text-sm mt-2 animate-fade-in font-inter">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl bg-background/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 font-inter text-sm sm:text-base ${
                        errors.email ? 'border-destructive' : 'border-border focus:border-primary'
                      }`}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs sm:text-sm mt-2 animate-fade-in font-inter">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-border rounded-2xl bg-background/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-inter text-sm sm:text-base"
                    placeholder="Subject (Optional)"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl bg-background/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none font-inter text-sm sm:text-base ${
                      errors.message ? 'border-destructive' : 'border-border focus:border-primary'
                    }`}
                    placeholder="Your Message"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs sm:text-sm mt-2 animate-fade-in font-inter">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-2xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl font-inter text-base sm:text-lg"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;