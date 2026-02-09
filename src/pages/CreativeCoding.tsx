import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import touchdesigner1 from "@/assets/touchdesigner-1.jpg";

const projects = [
  {
    title: "Particle Flow",
    description: "Real-time particle system driven by audio input, creating organic flowing visuals that respond to sound.",
    year: "2024",
  },
  {
    title: "Woven Data",
    description: "A generative piece that translates migration data into woven textile patterns using computational design.",
    year: "2024",
  },
  {
    title: "Breath",
    description: "An interactive installation where breath sensors control generative visuals projected across the gallery space.",
    year: "2023",
  },
];

const CreativeCoding = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl text-foreground mb-4"
        >
          Creative Coding
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-wider uppercase mb-16"
        >
          TouchDesigner · Generative Art
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-20"
        >
          <img
            src={touchdesigner1}
            alt="TouchDesigner generative art"
            className="w-full h-64 md:h-[480px] object-cover"
          />
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-display text-xl md:text-2xl text-foreground">{project.title}</h2>
                <span className="text-xs text-muted-foreground font-body">{project.year}</span>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default CreativeCoding;
