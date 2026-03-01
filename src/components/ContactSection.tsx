import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Contacto
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Agenda tu <span className="text-gradient">Cita</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Permítenos ser parte de tu felicidad. Contáctanos y da el primer
            paso hacia la sonrisa que siempre soñaste.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Teléfono",
              detail: "Llámanos para agendar",
              action: "Llamar ahora",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "Escríbenos directamente",
              action: "Enviar mensaje",
            },
            {
              icon: Clock,
              title: "Horario",
              detail: "Lun - Vie: 8:00 AM - 6:00 PM\nSáb: 8:00 AM - 1:00 PM",
              action: null,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 text-center glow-primary"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line mb-4">
                {item.detail}
              </p>
              {item.action && (
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  {item.action}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
