import { motion } from "framer-motion";

const PatientResultsSection = () => {
  const placeholders = [
    { id: 1, label: "Caso 1" },
    { id: 2, label: "Caso 2" },
    { id: 3, label: "Caso 3" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Resultados
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Algunos Resultados de{" "}
            <span className="text-gradient">Nuestros Pacientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Casos reales que reflejan nuestro compromiso con la excelencia y la transformación de sonrisas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-secondary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-heading text-2xl font-bold">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    Foto próximamente
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientResultsSection;
