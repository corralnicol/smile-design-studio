import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Sparkles,
  Crown,
  AlignCenter,
  Layers,
  Zap,
  Scissors,
  Heart,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Sparkles,
  Crown,
  AlignCenter,
  Layers,
  Zap,
  Scissors,
  Heart,
};

const ServicesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setExpandedSub(null);
  };

  const toggleSub = (key: string) => {
    setExpandedSub(expandedSub === key ? null : key);
  };

  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Portafolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un amplio portafolio de servicios multidisciplinarios que abarca
            todas las especialidades de la odontología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {service.subServices.length} procedimientos disponibles
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.subServices.map((sub, j) => {
                            const subKey = `${service.id}-${j}`;
                            const isSubExpanded = expandedSub === subKey;

                            return (
                              <div key={j}>
                                <button
                                  onClick={() => toggleSub(subKey)}
                                  className="w-full flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/40 text-sm hover:bg-secondary/60 transition-colors"
                                >
                                  <ChevronRight
                                    className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-200 ${
                                      isSubExpanded ? "rotate-90" : ""
                                    }`}
                                  />
                                  <span className="text-primary font-mono font-medium text-xs w-10 flex-shrink-0">
                                    {sub.code}
                                  </span>
                                  <span className="text-secondary-foreground text-left flex-1">
                                    {sub.name}
                                  </span>
                                </button>
                                <AnimatePresence>
                                  {isSubExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <p className="text-muted-foreground text-xs leading-relaxed py-2 px-10 bg-secondary/20 rounded-b-lg">
                                        {sub.detail}
                                      </p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
