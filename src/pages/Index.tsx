import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Vinay Teja Japa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experienced Full Stack Developer specializing in Java, Spring Boot, and microservices architecture. 7+ years building scalable enterprise applications. Available for freelance work.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vinay Teja Japa",
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer with 7+ years of experience specializing in Java and microservices architecture",
      "url": window.location.href,
      "sameAs": ["https://www.linkedin.com/in/japavinayteja/", "https://github.com/japavinayteja"],
      "worksFor": {
        "@type": "Organization",
        "name": "IBM"
      },
      "knowsAbout": ["Java", "Spring Boot", "Microservices", "REST API", "AWS", "Microsoft Azure", "Docker", "Kubernetes"]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Achievements Section */}
      <AchievementsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-footer text-footer-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm opacity-80">© 2025 Vinay Teja Japa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
