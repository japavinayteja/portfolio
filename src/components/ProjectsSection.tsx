import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Shield, Server, Database } from 'lucide-react';
import AnimatedText from './AnimatedText';
const ProjectsSection = () => {
  const projects = [{
    title: "Enterprise Application Development",
    company: "IBM",
    icon: <Building2 className="w-8 h-8" />,
    description: "Developed scalable microservices using Java and Spring Boot.",
    technologies: ["Java", "Spring Boot", "IBM MQ", "Microservices", "REST API"],
    highlights: ["Integrated enterprise messaging with IBM MQ", "Enhanced system resilience and performance", "Ensured compliance and security standards"]
  }, {
    title: "Application Security",
    company: "IBM",
    icon: <Shield className="w-8 h-8" />,
    description: "Fixed security vulnerabilities using static code analysis with Sonatype IQ Server and Fortify to ensure application security and compliance.",
    technologies: ["Fortify", "Nexus IQ Server", "Static Code Analysis", "Security Scanning"],
    highlights: ["Conducted comprehensive code security analysis with Nexus IQ Server", "Identified and resolved security vulnerabilities using Fortify", "Improved application security posture through static analysis"]
  }];
  return <section id="projects" className="section-spacing geometric-pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <AnimatedText text="Featured" /> <AnimatedText text="Projects" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 shadow-glow"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground font-inter">
            Here are some of the key projects I've worked on, showcasing my expertise in 
            enterprise application development and security implementation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 animate-fade-in-up group modern-card-bg glow-effect">
                <CardHeader className="pb-4 bg-gradient-to-r from-background to-background-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg text-primary group-hover:text-primary-light group-hover:shadow-glow transition-all duration-300 bg-primary/10 group-hover:bg-primary/20">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 font-heading group-hover:text-gradient transition-colors duration-300">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium font-inter">{project.company}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 modern-card-bg">
                  <p className="leading-relaxed text-muted-foreground font-inter">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-heading font-semibold mb-3 text-foreground">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground font-inter">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2 flex-shrink-0 shadow-glow"></div>
                          {highlight}
                        </li>)}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => <Badge key={idx} variant="outline" className="border-primary/20 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-transparent transition-all duration-300 font-inter font-medium">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;