import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import AnimatedText from './AnimatedText';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  // Initialize EmailJS
  emailjs.init('gYxJ-Eh8YjDMcdOzu');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      await emailjs.sendForm('service_d9rtwej', 'template_9urtgys', e.target as HTMLFormElement);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "vn.japa@gmail.com",
    link: "mailto:vn.japa@gmail.com"
  }, {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 914-916-0021",
    link: "tel:+19149160021"
  }, {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Beaverton, Oregon, USA",
    link: null
  }];
  const socialLinks = [{
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/japavinayteja/",
    color: "hover:text-primary"
  }, {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/japavinayteja",
    color: "hover:text-primary"
  }];
  return <section id="contact" className="section-spacing enhanced-pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <AnimatedText text="Let's" /> <AnimatedText text="Connect" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 shadow-glow"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 animate-fade-in-up modern-card-bg glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input name="name" placeholder="Your Name *" value={formData.name} onChange={handleInputChange} required className="border-primary/20 focus:border-primary focus:ring-primary/20 font-inter" />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Your Email *" value={formData.email} onChange={handleInputChange} required className="border-primary/20 focus:border-primary focus:ring-primary/20 font-inter" />
                    </div>
                  </div>
                  
                  <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} className="border-primary/20 focus:border-primary focus:ring-primary/20 font-inter" />
                  
                  <Textarea name="message" placeholder="Your message *" value={formData.message} onChange={handleInputChange} required className="min-h-[120px] border-primary/20 focus:border-primary focus:ring-primary/20 resize-none font-inter" />
                  
                  <Button type="submit" className="w-full shadow-button hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary glow-effect font-inter font-medium" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <Card className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 modern-card-bg">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-glow transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium font-inter">{info.label}</p>
                        {info.link ? <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors font-inter">
                            {info.value}
                          </a> : <p className="text-muted-foreground font-inter">{info.value}</p>}
                      </div>
                    </div>)}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 modern-card-bg">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Follow me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg bg-primary/10 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:shadow-glow transition-all duration-300 ${social.color} glow-effect`}>
                        {social.icon}
                      </a>)}
                  </div>
                </CardContent>
              </Card>

              {/* Status Badge */}
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;