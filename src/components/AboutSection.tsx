import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedText from './AnimatedText';
const AboutSection = () => {
  const skillCategories = [{
    title: "Technologies and Frameworks",
    skills: ["Java 17", "J2EE", "Hibernate", "Struts", "Spring Boot", "Spring MVC", "Microservices", "REST API"]
  }, {
    title: "Application Server",
    skills: ["JBoss 7.3", "Apache Tomcat", "WAS 8.5"]
  }, {
    title: "Database",
    skills: ["Oracle", "MySQL", "MongoDB"]
  }, {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure"]
  }, {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"]
  }, {
    title: "IDE",
    skills: ["Eclipse", "IntelliJ IDEA"]
  }, {
    title: "DevOps Tools",
    skills: ["Maven", "GIT", "Jenkins", "Consul", "Vault", "ELK Stack", "Docker", "Kubernetes"]
  }, {
    title: "APM Tools",
    skills: ["AppDynamics"]
  }, {
    title: "IT Service Management",
    skills: ["JIRA", "ServiceNow", "PagerDuty"]
  }];
  return <section id="about" className="section-spacing enhanced-pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <AnimatedText text="About" /> <AnimatedText text="Me" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 shadow-glow"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <Card className="mb-12 shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 animate-fade-in-up modern-card-bg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                
                <p className="text-lg leading-relaxed font-inter text-slate-900">
                  A passionate full stack developer with <strong className="text-gradient-accent bg-slate-950">7+ years of experience</strong>, specializing in 
                  Java and microservices architecture. I build scalable backend systems and intuitive front-end 
                  interfaces that drive enterprise performance and user satisfaction.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-inter">
                  Obsessed with <strong className="text-gradient-accent">clean code</strong>, <strong className="text-gradient-accent">resilient APIs</strong>, and 
                  <strong className="text-gradient-accent"> continuous innovation</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-heading font-bold text-center mb-12">
              <AnimatedText text="Technical" /> <AnimatedText text="Skills" />
            </h3>
            
            <div className="grid gap-8 p-8 rounded-xl shadow-card">
              {skillCategories.map((category, index) => <Card key={index} className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 group glow-effect">
                  <CardContent className="p-6 modern-card-bg">
                    <h4 className="text-xl font-heading font-semibold mb-4 text-foreground group-hover:text-gradient transition-colors duration-300">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="bg-gradient-to-r from-secondary to-muted text-foreground hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 font-inter font-medium">
                          {skill}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;