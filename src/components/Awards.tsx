import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Medal } from "lucide-react";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      icon: Trophy,
      title: "Innovation Excellence",
      description: "Recognized for pioneering AI-driven solutions in low-code platforms",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: Award,
      title: "Solution Excellence",
      description: "Multiple awards for delivering high-quality enterprise Appian solutions",
      color: "from-primary to-blue-400",
    },
    {
      icon: Star,
      title: "High-Impact Delivery",
      description: "Acknowledged for exceptional project delivery and client satisfaction",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Medal,
      title: "Technical Leadership",
      description: "Honored for mentorship and shaping technical best practices",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="awards" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">Recognition</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Awards & <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-amber-400">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4+ professional awards recognizing excellence in Appian solution delivery, innovation, and technical leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 text-center h-full hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display font-bold mb-2 group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8 md:p-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { value: "4+", label: "Professional Awards" },
              { value: "100%", label: "Project Success Rate" },
              { value: "10+", label: "Enterprise Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
