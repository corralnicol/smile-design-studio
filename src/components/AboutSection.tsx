import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Globe } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "26+", label: "Años de experiencia" },
  { icon: Award, value: "1.000+", label: "Diseños de sonrisa" },
  { icon: Users, value: "5+", label: "Años en estética dental" },
  { icon: Globe, value: "100%", label: "Pacientes satisfechos" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Sobre nosotros
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Dr. Prosdent
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Odontólogo clínico egresado de la{" "}
              <span className="text-foreground font-medium">
                Universidad Autónoma de Manizales
              </span>
              , especialista en administración en salud con diplomado en cirugía
              oral.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Con más de 26 años de trayectoria profesional y 5 años dedicados
              a la estética dental, ha realizado más de{" "}
              <span className="text-primary font-semibold">
                1.000 diseños de sonrisa
              </span>{" "}
              a pacientes nacionales e internacionales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Su compromiso con la excelencia y la actualización constante
              garantiza tratamientos de la más alta calidad con resultados
              excepcionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 text-center glow-primary"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-heading font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
