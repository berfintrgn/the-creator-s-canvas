import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import pinkSeries1 from "@/assets/pink-series-1.jpg";
import pinkSeries2 from "@/assets/pink-series-2.jpg";
import pinkSeries3 from "@/assets/pink-series-3.jpg";

const pinkWorks = [
  { id: 1, src: pinkSeries1, title: "Untitled I", medium: "Mixed media on canvas" },
  { id: 2, src: pinkSeries2, title: "Untitled II", medium: "Paper collage and acrylic" },
  { id: 3, src: pinkSeries3, title: "Untitled III", medium: "Acrylic on burlap" },
];

const CreativeWorks = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl text-foreground mb-4"
        >
          Creative Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-wider uppercase mb-20"
        >
          Pink Series · Virtual Exhibition
        </motion.p>

        {/* Pink Series */}
        <div className="mb-24">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Pink Series</h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl mb-12">
            A collection of mixed media works exploring femininity, softness, and strength through
            varying shades of pink. Each piece layers paint, fabric, and paper to create textured surfaces
            that invite close inspection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pinkWorks.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="cursor-pointer group"
                onClick={() => setSelected(work.id)}
              >
                <div className="overflow-hidden mb-3">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-base text-foreground">{work.title}</h3>
                <p className="text-muted-foreground font-body text-xs">{work.medium}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Virtual Exhibition */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Virtual Exhibition</h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl mb-12">
            An immersive digital space where these works come together. The virtual exhibition reimagines
            the gallery experience, allowing visitors to engage with the art from anywhere in the world.
          </p>
          <div className="border border-border p-12 md:p-20 text-center">
            <p className="text-muted-foreground font-body text-sm italic">
              Virtual exhibition coming soon — check back for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={pinkWorks.find((w) => w.id === selected)?.src}
              alt=""
              className="max-w-full max-h-[80vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default CreativeWorks;
