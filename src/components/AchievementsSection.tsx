import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, TrendingUp, Users } from 'lucide-react';
import AnimatedText from './AnimatedText';
const AchievementsSection = () => {
  const achievements = [{
    icon: <Trophy className="w-8 h-8" />,
    title: "IBM Innovation Tournament 2nd Place",
    subtitle: "2nd Place Achievement",
    description: "Ranked in 2nd place from a pool of 156 ideas, demonstrating strong innovation and technical excellence.",
    badge: "🥈 Innovation Award",
    color: "bg-accent/10 text-accent border-accent/20"
  }, {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Microservices Migration Leader",
    subtitle: "Technical Leadership",
    description: "Developed scalable microservices using Java and Spring Boot.",
    badge: "🚀 Technical Lead",
    color: "bg-primary/10 text-primary border-primary/20"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Excellence in Support",
    subtitle: "Team Recognition",
    description: "Recognized for excellence in on-call support and proactive issue resolution across enterprise environments, ensuring 99.9% system uptime.",
    badge: "⭐ Team Excellence",
    color: "bg-secondary/10 text-secondary-foreground border-secondary/20"
  }];
  return <section id="achievements" className="section-spacing enhanced-pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <AnimatedText text="Key" /> <AnimatedText text="Achievements" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 shadow-glow"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground font-inter">
            Recognition and milestones that showcase my commitment to innovation, 
            technical excellence, and team collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {achievements.map((achievement, index) => <Card key={index} className="shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 animate-fade-in-up group modern-card-bg glow-effect">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl text-primary group-hover:text-primary-light group-hover:shadow-glow transition-all duration-300 w-fit bg-primary/10 group-hover:bg-primary/20">
                        {achievement.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-heading font-bold group-hover:text-gradient transition-colors duration-300">{achievement.title}</h3>
                          <Badge variant="outline" className={`${achievement.color} w-fit font-inter font-medium hover:shadow-glow transition-all duration-300`}>
                            {achievement.badge}
                          </Badge>
                        </div>
                        
                      </div>
                      
                      <p className="leading-relaxed text-muted-foreground font-inter">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            
            
            
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default AchievementsSection;