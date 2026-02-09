import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import belonging1 from "@/assets/belonging-1.jpg";

const Belonging = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl text-foreground mb-4"
        >
          Be-longing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-wider uppercase mb-16"
        >
          Academic Research · Artistic Practice
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-16"
        >
          <img
            src={belonging1}
            alt="Be-longing installation"
            className="w-full h-72 md:h-[500px] object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl text-foreground">About the Project</h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Be-longing is an interdisciplinary research project that explores themes of displacement,
              identity, and the concept of home through artistic practice. The work weaves together
              textile, text, and installation to create immersive narratives about belonging and
              un-belonging.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Rooted in academic inquiry and personal experience, this project bridges the gap between
              scholarly research and creative expression, inviting viewers to reflect on their own
              relationship with place and community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl text-foreground">Research Themes</h2>
            <ul className="space-y-3">
              {["Displacement & Migration", "Identity & Memory", "Textile as Narrative", "Space & Place-making", "Community & Connection"].map((theme) => (
                <li key={theme} className="text-muted-foreground font-body text-sm flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full shrink-0" />
                  {theme}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Belonging;
