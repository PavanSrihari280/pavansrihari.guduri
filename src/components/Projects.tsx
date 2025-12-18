import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Driving License Application Platform",
      category: "Government Digital Services",
      description: "Digitized and automated citizen services for government agencies, transforming paper-based processes into streamlined digital workflows.",
      outcomes: [
        "Improved turnaround time by 60%",
        "Enhanced process efficiency",
        "Reduced manual intervention",
      ],
      gradient: "from-primary via-blue-500 to-purple-500",
    },
    {
      title: "Appian Scheduler Management System",
      category: "Enterprise Automation",
      description: "Built a reliable scheduling and monitoring framework for background processing, ensuring system stability and operational excellence.",
      outcomes: [
        "Reduced processing failures by 80%",
        "Real-time monitoring dashboards",
        "Automated failure recovery",
      ],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
    {
      title: "Customer Feedback Intelligence System",
      category: "AI-Powered Analytics",
      description: "Leveraged Appian Agent Studio to build an AI-driven sentiment analysis platform for customer insights and feedback processing.",
      outcomes: [
        "AI-driven sentiment analysis",
        "Actionable customer insights",
        "Automated feedback categorization",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "AI Utility Bills Planner",
      category: "Predictive Analytics",
      description: "Smart forecasting and planning solution using AI models for cost-optimization in utility management.",
      outcomes: [
        "Predictive cost modeling",
        "Budget optimization insights",
        "Resource planning automation",
      ],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Signature Work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Impact & <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable business value through innovative Appian solutions that transform enterprise operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card h-full p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Key Outcomes</span>
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
