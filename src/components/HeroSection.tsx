import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Upload, Download } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';
const HeroSection = () => {
  const [profileImage, setProfileImage] = useState<string>(profilePicture);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add your CV file to the public folder
    link.download = 'Vinay_Teja_Japa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="home" className="hero-workspace-bg hero-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Profile Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <div className="relative group animate-slide-in-left">
              <div className="relative">
                <Avatar className="w-80 h-80 shadow-hero animate-float ring-4 ring-primary/20 ring-opacity-50">
                  <AvatarImage src={profileImage} alt="Vinay Teja Japa" className="object-cover" />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground font-playfair font-bold">
                    VTJ
                  </AvatarFallback>
                </Avatar>
                
                {/* Upload Button */}
                <label htmlFor="profile-upload" className="absolute bottom-4 right-4 cursor-pointer">
                  
                  <input id="profile-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>

              {/* Floating Badges */}
              
              
              <Badge className="absolute top-1/4 -right-8 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow animate-pulse px-px my-[30px]">
                💡 7+ Years Experience
              </Badge>
              
              
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-in-right">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
                Hi, I'm{' '}
                <span className="block text-gradient-bright font-playfair">
                  {"Vinay Teja Japa".split('').map((letter, index) => (
                    <span 
                      key={index}
                      className="letter-flash"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationIterationCount: 'infinite',
                        animationDuration: '3s'
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90 font-inter">
                Full Stack Developer with a backend edge in Java and microservices.
              </h2>

              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl font-inter">
                I build scalable enterprise applications—from resilient APIs to seamless user 
                experiences—that solve real-world problems with precision and purpose.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button onClick={scrollToProjects} size="lg" className="group shadow-button hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-primary-bright to-primary-bright-light hover:from-primary-bright-light hover:to-primary-bright glow-effect text-primary-foreground font-semibold">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                <div className="text-center">
                  
                  
                </div>
                <div className="text-center">
                  
                  
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">1</div>
                  <div className="text-sm text-primary-foreground/70">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;