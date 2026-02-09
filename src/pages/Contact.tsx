import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Mail, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl text-foreground mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground font-body text-sm leading-relaxed mb-16 max-w-lg"
          >
            For collaborations, inquiries, or just to say hello — I'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-8"
          >
            <a
              href="mailto:hello@dotandeyestudio.com"
              className="flex items-center gap-4 group"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                hello@dotandeyestudio.com
              </span>
            </a>

            <a
              href="https://instagram.com/dotandeyestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Instagram size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                @dotandeyestudio
              </span>
            </a>

            <a
              href="https://youtube.com/@dotandeyestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Youtube size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                dotandeyestudio
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 border-t border-border pt-8"
          >
            <p className="font-display text-lg text-foreground italic">
              "Art is the lie that enables us to realize the truth."
            </p>
            <p className="text-muted-foreground font-body text-xs mt-2">— Pablo Picasso</p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
