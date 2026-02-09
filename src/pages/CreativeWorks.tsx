import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import VideoGallery from "@/components/VideoGallery/VideoGallery";

const CreativeWorks = () => {
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

          <VideoGallery playlistId="PLwboaLAlWkhhtZYo4xu1fnUskzL1NwUL1" />
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
    </PageTransition>
  );
};

export default CreativeWorks;
