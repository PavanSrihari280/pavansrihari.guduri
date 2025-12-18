import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Layers, 
  GitBranch, 
  Plug, 
  Bot, 
  Clock, 
  Building2,
  Boxes,
} from "lucide-react";

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Layers,
      title: "Appian Platform",
      description: "SAIL, Records, Reports, Process Models & Advanced UI Components",
      color: "from-primary to-blue-400",
    },
    {
      icon: GitBranch,
      title: "BPMN & Process Automation",
      description: "Complex workflow design, process optimization & business rules",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Plug,
      title: "Appian Integrations & APIs",
      description: "REST/SOAP APIs, connected systems & enterprise integrations",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bot,
      title: "Agent Studio & AI Enablement",
      description: "AI-powered solutions, intelligent automation & ML integration",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Clock,
      title: "Scheduler & Background Processing",
      description: "Automated scheduling, batch processing & system optimization",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Building2,
      title: "Enterprise Low-Code Architecture",
      description: "Scalable design patterns, best practices & governance",
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Core Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across the Appian ecosystem, enabling end-to-end enterprise automation and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
