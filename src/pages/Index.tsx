import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";
import belonging1 from "@/assets/belonging-1.jpg";
import pinkSeries1 from "@/assets/pink-series-1.jpg";
import touchdesigner1 from "@/assets/touchdesigner-1.jpg";

const sections = [
  {
    title: "Be-longing",
    description: "An academic exploration of displacement, identity, and the spaces we inhabit.",
    image: belonging1,
    link: "/be-longing",
  },
  {
    title: "Creative Works",
    description: "The Pink Series & Virtual Exhibition — mixed media explorations in color and texture.",
    image: pinkSeries1,
    link: "/creative-works",
  },
  {
    title: "Creative Coding",
    description: "Generative art and immersive visuals through TouchDesigner.",
    image: touchdesigner1,
    link: "/creative-coding",
  },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-foreground leading-tight"
          >
            dotandeye
            <br />
            <span className="italic font-light">studio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-base text-muted-foreground font-body tracking-wider uppercase"
          >
            Academic · Artist · Creator
          </motion.p>
        </div>
      </section>

      {/* Sections preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <Link to={section.link} className="group block">
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}>
                <div className="w-full md:w-3/5 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 md:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-2/5 space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl text-foreground group-hover:italic transition-all duration-300">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {section.description}
                  </p>
                  <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors border-b border-muted-foreground group-hover:border-foreground pb-1">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </PageTransition>
  );
};

export default Index;
