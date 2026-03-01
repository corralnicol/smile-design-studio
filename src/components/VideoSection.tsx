import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Diseño de Sonrisa
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Diseños en <span className="text-gradient">Porcelana y Resina</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transformamos sonrisas con diseños personalizados utilizando los mejores materiales en porcelana y resina de alta estética.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <video
              controls
              className="w-full aspect-video"
              poster=""
              preload="metadata"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
