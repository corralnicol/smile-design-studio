export interface SubService {
  code: string;
  name: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
  {
    id: "promocion",
    name: "Promoción y Prevención",
    description: "Cuidado preventivo y diagnóstico integral para mantener tu salud oral en óptimas condiciones. Incluye limpiezas profesionales, fluorización y detección temprana de problemas dentales.",
    icon: "Shield",
    subServices: [
      { code: "A.01", name: "Diagnóstico general Odontológico" },
      { code: "A.03", name: "Fluorización" },
      { code: "A.04", name: "Profilaxis con Detartraje Supragingival" },
      { code: "A.05", name: "Sellantes de Fotocurado" },
      { code: "A.07", name: "Remoción de aparatología ortodoncia" },
      { code: "A.09", name: "Toma de radiografías periapicales" },
      { code: "UR", name: "Urgencias odontológica" },
    ],
  },
  {
    id: "operatoria",
    name: "Operatoria y Estética Dental",
    description: "Restauraciones estéticas de alta calidad y tratamientos de blanqueamiento para lograr la sonrisa perfecta. Utilizamos materiales de última generación para resultados naturales y duraderos.",
    icon: "Sparkles",
    subServices: [
      { code: "O.01", name: "Resina de 1 superficie manejo de retracciones" },
      { code: "O.02", name: "Obturación Resina de 1 superficie en dientes" },
      { code: "O.03", name: "Obturación Resina de 2 superficies en dientes" },
      { code: "O.04", name: "Obturación Resina de 3 superficies en dientes" },
      { code: "O.05", name: "Obturación Resina de 4 superficies en dientes" },
      { code: "O.06", name: "Carilla de alta estética Directa en resina" },
      { code: "O.07", name: "Blanqueamiento NIGHT WHITE Casero" },
      { code: "O.08", name: "Blanqueamiento Láser en una Hora" },
      { code: "O.10", name: "Sesión extra de blanqueamiento láser 20'" },
      { code: "O.11", name: "Placa Oclusal Neuromiorelajante Dou Confort" },
      { code: "O.12", name: "Placa sin programar" },
      { code: "O.13", name: "Placa Programada normal" },
      { code: "O.14", name: "Reatomización oclusal en resina" },
      { code: "O.15", name: "Blanqueamiento combinado" },
    ],
  },
  {
    id: "rehabilitacion-fija",
    name: "Rehabilitación Oral Fija",
    description: "Prótesis fijas de alta precisión incluyendo coronas, implantes y carillas cerámicas. Devolvemos la funcionalidad y estética a tu sonrisa con tecnología de punta.",
    icon: "Crown",
    subServices: [
      { code: "R.01", name: "Corona temporal en Acrílico" },
      { code: "R.02", name: "Fase quirúrgica colocación implante" },
      { code: "R.03", name: "Fase rehabilitación corona metal porcelana" },
      { code: "R.04", name: "Fase rehabilitación corona libre de metal" },
      { code: "R.05", name: "Corona collar les- metal porcelana" },
      { code: "R.06", name: "Corona libre de metal zirconio" },
      { code: "R.07", name: "Lente cerámico silicato de litio" },
      { code: "R.10", name: "Núcleo intraradicular" },
      { code: "R.13", name: "Retiro de núcleos y pines prefabricados" },
      { code: "R.14", name: "Incrustaciones Cerámica" },
      { code: "R.15", name: "Regeneración ósea con membrana x gramo hueso" },
    ],
  },
  {
    id: "ortopedia",
    name: "Ortopedia y Ortodoncia",
    description: "Corrección de la posición dental y mandibular mediante técnicas modernas incluyendo ortodoncia invisible. Alineamos tu sonrisa de forma cómoda y eficiente.",
    icon: "AlignCenter",
    subServices: [
      { code: "M.06", name: "Retenedor Essix y/o Hawley" },
      { code: "M.07", name: "Ortodoncia invisible" },
      { code: "M.08", name: "Retenedor fijo" },
    ],
  },
  {
    id: "rehabilitacion-removible",
    name: "Rehabilitación Oral Removible",
    description: "Prótesis removibles de última generación para restaurar la función masticatoria y la estética dental. Diseñamos soluciones personalizadas para cada paciente.",
    icon: "Layers",
    subServices: [
      { code: "R.17", name: "Prótesis parcial acrílica dientes Duratone" },
      { code: "R.18", name: "Prótesis Dentomusoportada estructura metal" },
      { code: "R.19", name: "Prótesis acrílica inmediata" },
      { code: "R.21", name: "Prótesis Total acrílica Duratone" },
      { code: "R.24", name: "Prótesis parcial flexible Vayplax Dtes Duratone" },
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    description: "Tratamientos de conducto y terapias pulpares para salvar dientes comprometidos. Eliminamos el dolor y preservamos la estructura dental natural.",
    icon: "Zap",
    subServices: [
      { code: "E.00", name: "Blanqueamiento Diente no Vitales 4 sesiones" },
      { code: "E.01", name: "Cirugía Apical" },
      { code: "E.02", name: "Desobturación de conducto" },
      { code: "E.03", name: "Tratamiento de Conducto Unirradicular" },
      { code: "E.04", name: "Tratamiento de Conducto Birradicular" },
      { code: "E.05", name: "Tratamiento de Conducto Multirradicular" },
      { code: "E.06", name: "Retratamiento de Conducto Unirradicular" },
      { code: "E.07", name: "Retratamiento de Conducto Birradicular" },
      { code: "E.08", name: "Retratamiento de Conducto Multirradicular" },
      { code: "E.09", name: "Selle de perforación" },
      { code: "E.10", name: "Terapia Apical por sesión" },
    ],
  },
  {
    id: "cirugia",
    name: "Cirugía Oral",
    description: "Procedimientos quirúrgicos especializados desde extracciones simples hasta cirugías complejas. Contamos con tecnología avanzada para procedimientos seguros y mínimamente invasivos.",
    icon: "Scissors",
    subServices: [
      { code: "C.01", name: "Exodoncia simple unirradicular" },
      { code: "C.02", name: "Exodoncia simple Multirradicular" },
      { code: "C.03", name: "Exodoncia simple Temporal" },
      { code: "C.04", name: "Exodoncia Método Abierto simple" },
      { code: "C.05", name: "Exodoncia Método Abierto Compleja" },
      { code: "C.06", name: "Terapia de Botox Bruxismo" },
      { code: "C.07", name: "Bichetomía" },
    ],
  },
  {
    id: "periodoncia",
    name: "Periodoncia",
    description: "Tratamiento de enfermedades de las encías y tejidos de soporte dental. Desde limpiezas profundas hasta cirugías periodontales para mantener encías sanas.",
    icon: "Heart",
    subServices: [
      { code: "P.01", name: "Raspaje y Alisado Radicular Campo abierto" },
      { code: "P.02", name: "Alargamiento de Corona Clínica" },
      { code: "P.03", name: "Frenillectomía" },
      { code: "P.04", name: "Elevación de seno Maxilar" },
      { code: "P.04", name: "Estética Periodontal de Canino a Canino" },
      { code: "P.06", name: "Ventana Quirúrgica" },
      { code: "P.07", name: "Cirugía Exploratoria" },
    ],
  },
];
