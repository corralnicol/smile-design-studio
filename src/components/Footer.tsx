const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-xl font-bold text-gradient mb-2">
          Prosdent
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Prosdent Clínica Odontológica. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
