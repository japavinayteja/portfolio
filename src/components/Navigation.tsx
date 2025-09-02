import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About Me'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'achievements',
    label: 'Achievements'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-footer backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-all duration-200 hover:text-footer-foreground hover:bg-footer-foreground/10 px-3 py-2 rounded-md ${activeSection === item.id ? 'text-footer-foreground opacity-100 bg-footer-foreground/20' : 'text-footer-foreground opacity-80'}`}>
                {item.label}
              </button>)}
          </div>

          <div className="hidden md:flex">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium transition-all duration-200 hover:text-footer-foreground hover:bg-footer-foreground/10 px-3 py-2 rounded-md text-footer-foreground opacity-80"
            >
              Let's Connect
            </button>
          </div>

        </div>
      </div>
    </nav>;
};
export default Navigation;