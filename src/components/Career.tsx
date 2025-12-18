import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      title: "Technical Lead",
      company: "Coforge",
      period: "June 2025 – Present",
      description: [
        "Leading Appian architecture and delivery for enterprise clients",
        "Driving solution quality, scalability, and best practices",
        "Mentoring teams and shaping technical direction",
      ],
      current: true,
    },
    {
      title: "Lead Software Engineer",
      company: "Persistent Systems",
      period: "Dec 2023 – June 2025",
      description: [
        "Led development of enterprise Appian applications",
        "Designed complex workflows and integrations",
        "Delivered high-value automation solutions",
      ],
      current: false,
    },
    {
      title: "Associate Software Engineer",
      company: "Machint Solutions",
      period: "Aug 2021 – Dec 2023",
      description: [
        "Built foundational Appian applications",
        "Worked across multiple client projects",
        "Developed strong BPM and low-code expertise",
      ],
      current: false,
    },
  ];

  return (
    <section id="career" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Career Journey</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Leadership & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A progressive journey from foundational development to technical leadership in enterprise Appian solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${item.current ? "bg-primary animate-pulse" : "bg-secondary border-2 border-primary"}`} />
                {item.current && (
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                )}
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${item.current ? "border-primary/30 glow-primary" : ""}`}>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Current Role
                    </span>
                  )}
                  
                  <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
