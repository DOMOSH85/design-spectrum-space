import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Coffee, Lightbulb, Download, Play } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Lightbulb, value: "5+", label: "Years Experience" }
];

const skills = [
  { name: "Graphic Design", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Brand Identity", level: 92 },
  { name: "Web Design", level: 88 },
  { name: "Typography", level: 94 },
  { name: "Illustration", level: 85 }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate designer creating meaningful visual experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-custom-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Designer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover-lift border-border/50">
                    <CardContent className="p-0">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground">
                Hello! I'm a Creative Designer
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 5 years of experience in graphic design and brand identity, 
                I specialize in creating visually compelling designs that tell stories 
                and connect with audiences. My passion lies in transforming complex ideas 
                into simple, beautiful, and effective visual solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great design is not just about making things look pretty – 
                it's about solving problems, communicating messages, and creating experiences 
                that resonate with people. Every project is an opportunity to make something meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Skills & Expertise</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full hover-scale"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full hover-scale"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}