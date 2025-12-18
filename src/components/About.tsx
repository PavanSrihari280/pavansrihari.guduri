import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Award, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Target, title: "Ownership", description: "End-to-end accountability for solution delivery" },
    { icon: Lightbulb, title: "Innovation", description: "AI-driven approaches to enterprise challenges" },
    { icon: Award, title: "Excellence", description: "Award-winning quality in every project" },
    { icon: Rocket, title: "Impact", description: "Measurable business outcomes that matter" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Personal Brand <span className="gradient-text">Story</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              With <span className="text-foreground font-semibold">4+ years of professional experience</span> in Appian and enterprise automation, I've progressed from Associate Software Engineer to <span className="text-primary font-semibold">Technical Lead</span>, driven by a passion for building scalable solutions that create real business impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans <span className="text-foreground font-semibold">Business Process Optimization</span>, Low-Code Digital Transformation, and AI-driven Appian solutions. I specialize in architecting enterprise systems that not only meet current needs but scale with organizational growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known for my commitment to <span className="text-primary font-semibold">ownership and solution excellence</span>, I believe in delivering outcomes that move the needle – transforming complex business challenges into elegant, automated workflows.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
