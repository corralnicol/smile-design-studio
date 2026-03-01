export interface SubService {
  code: string;
  name: string;
  detail: string;
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
      { code: "A.01", name: "Diagnóstico general Odontológico", detail: "Evaluación completa de la salud oral del paciente, incluyendo examen clínico, análisis de tejidos blandos y duros, y plan de tratamiento personalizado." },
      { code: "A.03", name: "Fluorización", detail: "Aplicación tópica de flúor profesional para fortalecer el esmalte dental, prevenir caries y remineralizar áreas debilitadas del diente." },
      { code: "A.04", name: "Profilaxis con Detartraje Supragingival", detail: "Limpieza dental profesional que elimina placa bacteriana y cálculo (sarro) acumulado por encima de la línea de las encías, devolviendo brillo y salud a los dientes." },
      { code: "A.05", name: "Sellantes de Fotocurado", detail: "Recubrimiento protector de resina que se aplica en las fisuras y surcos de los dientes posteriores para prevenir la acumulación de bacterias y la formación de caries." },
      { code: "A.07", name: "Remoción de aparatología ortodoncia", detail: "Retiro seguro y profesional de brackets, bandas y alambres de ortodoncia, seguido de pulido dental para eliminar residuos de adhesivo." },
      { code: "A.09", name: "Toma de radiografías periapicales", detail: "Imagen diagnóstica de alta resolución que muestra la raíz completa del diente y el hueso circundante, esencial para detectar infecciones, quistes o fracturas." },
      { code: "UR", name: "Urgencias odontológica", detail: "Atención inmediata para dolor dental agudo, traumatismos dentales, infecciones, abscesos o cualquier emergencia que requiera tratamiento odontológico urgente." },
    ],
  },
  {
    id: "operatoria",
    name: "Operatoria y Estética Dental",
    description: "Restauraciones estéticas de alta calidad y tratamientos de blanqueamiento para lograr la sonrisa perfecta. Utilizamos materiales de última generación para resultados naturales y duraderos.",
    icon: "Sparkles",
    subServices: [
      { code: "O.01", name: "Resina de 1 superficie manejo de retracciones", detail: "Restauración estética con resina compuesta para tratar el desgaste cervical causado por la retracción de las encías, devolviendo forma y protección al diente." },
      { code: "O.02", name: "Obturación Resina de 1 superficie en dientes", detail: "Restauración dental con resina de alta estética en una sola cara del diente afectado por caries o fractura, logrando un resultado natural e imperceptible." },
      { code: "O.03", name: "Obturación Resina de 2 superficies en dientes", detail: "Restauración que abarca dos caras del diente, ideal para caries que comprometen superficies adyacentes. Se utiliza resina de alta resistencia y estética." },
      { code: "O.04", name: "Obturación Resina de 3 superficies en dientes", detail: "Restauración compleja que cubre tres caras del diente, requiriendo técnica avanzada de estratificación para lograr forma, función y color naturales." },
      { code: "O.05", name: "Obturación Resina de 4 superficies en dientes", detail: "Restauración extensa que reconstruye cuatro superficies del diente severamente dañado, utilizando resinas de última generación para máxima durabilidad." },
      { code: "O.06", name: "Carilla de alta estética Directa en resina", detail: "Lámina de resina compuesta esculpida directamente sobre el diente para corregir color, forma, tamaño o alineación, logrando una transformación estética inmediata." },
      { code: "O.07", name: "Blanqueamiento NIGHT WHITE Casero", detail: "Sistema de blanqueamiento con cubetas personalizadas y gel profesional de uso nocturno para aclarar gradualmente el tono de los dientes desde la comodidad del hogar." },
      { code: "O.08", name: "Blanqueamiento Láser en una Hora", detail: "Tratamiento de blanqueamiento dental con tecnología láser que aclara varios tonos en una sola sesión de una hora, con resultados inmediatos y visibles." },
      { code: "O.10", name: "Sesión extra de blanqueamiento láser 20'", detail: "Sesión complementaria de refuerzo de 20 minutos con láser para potenciar y mantener los resultados del blanqueamiento dental profesional." },
      { code: "O.11", name: "Placa Oclusal Neuromiorelajante Dou Confort", detail: "Dispositivo intraoral de alta tecnología diseñado para aliviar el bruxismo, proteger los dientes del desgaste y relajar la musculatura mandibular durante el sueño." },
      { code: "O.12", name: "Placa sin programar", detail: "Placa oclusal básica fabricada a medida para protección dental nocturna sin ajustes de mordida específicos, ideal como barrera contra el bruxismo." },
      { code: "O.13", name: "Placa Programada normal", detail: "Placa oclusal con programación de mordida personalizada que redistribuye las fuerzas masticatorias y corrige la relación entre los maxilares." },
      { code: "O.14", name: "Reatomización oclusal en resina", detail: "Procedimiento de ajuste y reconstrucción de la superficie masticatoria del diente con resina para mejorar el contacto oclusal y la función masticatoria." },
      { code: "O.15", name: "Blanqueamiento combinado", detail: "Protocolo que combina blanqueamiento láser en consultorio con sistema casero para lograr resultados más intensos, uniformes y duraderos." },
    ],
  },
  {
    id: "rehabilitacion-fija",
    name: "Rehabilitación Oral Fija",
    description: "Prótesis fijas de alta precisión incluyendo coronas, implantes y carillas cerámicas. Devolvemos la funcionalidad y estética a tu sonrisa con tecnología de punta.",
    icon: "Crown",
    subServices: [
      { code: "R.01", name: "Corona temporal en Acrílico", detail: "Prótesis provisional fabricada en acrílico que protege el diente preparado mientras se confecciona la corona definitiva, manteniendo estética y función." },
      { code: "R.02", name: "Fase quirúrgica colocación implante", detail: "Procedimiento quirúrgico para insertar un implante de titanio en el hueso maxilar, que servirá como raíz artificial para soportar una corona dental." },
      { code: "R.03", name: "Fase rehabilitación corona metal porcelana", detail: "Colocación de la corona definitiva sobre el implante, fabricada con estructura metálica recubierta de porcelana para combinar resistencia y estética." },
      { code: "R.04", name: "Fase rehabilitación corona libre de metal", detail: "Corona sobre implante sin estructura metálica, fabricada en zirconio o disilicato de litio para máxima estética y biocompatibilidad." },
      { code: "R.05", name: "Corona collar les- metal porcelana", detail: "Corona con estructura metálica y recubrimiento cerámico con margen estético sin collar metálico visible, ideal para dientes anteriores." },
      { code: "R.06", name: "Corona libre de metal zirconio", detail: "Corona de última generación fabricada enteramente en zirconio, ofreciendo máxima resistencia, translucidez natural y biocompatibilidad superior." },
      { code: "R.07", name: "Lente cerámico silicato de litio", detail: "Carilla ultrafina de cerámica de silicato de litio que se adhiere al diente con mínima preparación, ideal para transformaciones estéticas conservadoras." },
      { code: "R.10", name: "Núcleo intraradicular", detail: "Poste o perno que se cimenta dentro del conducto radicular para reconstruir la estructura interna del diente y dar soporte a una corona." },
      { code: "R.13", name: "Retiro de núcleos y pines prefabricados", detail: "Procedimiento especializado para extraer postes o pernos existentes del conducto radicular, necesario antes de retratamientos o nuevas rehabilitaciones." },
      { code: "R.14", name: "Incrustaciones Cerámica", detail: "Restauración indirecta de cerámica fabricada en laboratorio que se adhiere al diente para reconstruir grandes pérdidas de estructura dental con alta precisión." },
      { code: "R.15", name: "Regeneración ósea con membrana x gramo hueso", detail: "Procedimiento de injerto óseo con biomateriales y membranas para regenerar hueso perdido, necesario antes de la colocación de implantes dentales." },
    ],
  },
  {
    id: "ortopedia",
    name: "Ortopedia y Ortodoncia",
    description: "Corrección de la posición dental y mandibular mediante técnicas modernas incluyendo ortodoncia invisible. Alineamos tu sonrisa de forma cómoda y eficiente.",
    icon: "AlignCenter",
    subServices: [
      { code: "M.06", name: "Retenedor Essix y/o Hawley", detail: "Aparato removible que mantiene los dientes en su posición correcta después del tratamiento de ortodoncia, disponible en versión transparente (Essix) o con alambre (Hawley)." },
      { code: "M.07", name: "Ortodoncia invisible", detail: "Sistema de alineadores transparentes removibles que corrigen la posición dental de forma estética y cómoda, prácticamente imperceptibles durante el uso diario." },
      { code: "M.08", name: "Retenedor fijo", detail: "Alambre delgado cementado en la cara interna de los dientes anteriores para mantener permanentemente la alineación lograda con el tratamiento de ortodoncia." },
    ],
  },
  {
    id: "rehabilitacion-removible",
    name: "Rehabilitación Oral Removible",
    description: "Prótesis removibles de última generación para restaurar la función masticatoria y la estética dental. Diseñamos soluciones personalizadas para cada paciente.",
    icon: "Layers",
    subServices: [
      { code: "R.17", name: "Prótesis parcial acrílica dientes Duratone", detail: "Prótesis removible en acrílico con dientes Duratone de alta resistencia al desgaste, ideal para reemplazar varios dientes perdidos de forma económica y funcional." },
      { code: "R.18", name: "Prótesis Dentomusoportada estructura metal", detail: "Prótesis parcial removible con esqueleto metálico que se apoya en dientes naturales y mucosa, ofreciendo mayor estabilidad y durabilidad que las de acrílico." },
      { code: "R.19", name: "Prótesis acrílica inmediata", detail: "Prótesis provisional colocada inmediatamente después de las extracciones dentales para que el paciente no quede sin dientes durante el proceso de cicatrización." },
      { code: "R.21", name: "Prótesis Total acrílica Duratone", detail: "Prótesis completa removible para pacientes sin dientes, fabricada con dientes Duratone de alta calidad que imitan la apariencia natural y resisten el desgaste." },
      { code: "R.24", name: "Prótesis parcial flexible Vayplax Dtes Duratone", detail: "Prótesis removible fabricada en material termoplástico flexible que se adapta cómodamente a la boca, sin ganchos metálicos visibles, con dientes Duratone." },
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    description: "Tratamientos de conducto y terapias pulpares para salvar dientes comprometidos. Eliminamos el dolor y preservamos la estructura dental natural.",
    icon: "Zap",
    subServices: [
      { code: "E.00", name: "Blanqueamiento Diente no Vitales 4 sesiones", detail: "Tratamiento de blanqueamiento interno para dientes que han perdido vitalidad y se han oscurecido, aplicando agentes blanqueadores dentro del diente en 4 sesiones." },
      { code: "E.01", name: "Cirugía Apical", detail: "Procedimiento quirúrgico para eliminar infecciones en la punta de la raíz dental cuando el tratamiento de conducto convencional no es suficiente." },
      { code: "E.02", name: "Desobturación de conducto", detail: "Remoción del material de obturación existente dentro del conducto radicular para permitir un retratamiento o una nueva intervención endodóntica." },
      { code: "E.03", name: "Tratamiento de Conducto Unirradicular", detail: "Procedimiento para eliminar el nervio infectado de un diente con una sola raíz, limpiar, desinfectar y sellar el conducto para preservar el diente." },
      { code: "E.04", name: "Tratamiento de Conducto Birradicular", detail: "Endodoncia en dientes con dos raíces y conductos, requiriendo mayor precisión para limpiar y sellar cada canal radicular de forma independiente." },
      { code: "E.05", name: "Tratamiento de Conducto Multirradicular", detail: "Endodoncia compleja en molares con tres o más conductos radiculares, utilizando instrumentación avanzada para garantizar la limpieza total del sistema de canales." },
      { code: "E.06", name: "Retratamiento de Conducto Unirradicular", detail: "Repetición del tratamiento de conducto en un diente previamente tratado que presenta nueva infección o sellado deficiente, requiriendo remoción del material previo." },
      { code: "E.07", name: "Retratamiento de Conducto Birradicular", detail: "Retratamiento endodóntico en diente de dos raíces, removiendo la obturación anterior para limpiar y sellar nuevamente los conductos de forma óptima." },
      { code: "E.08", name: "Retratamiento de Conducto Multirradicular", detail: "Retratamiento complejo en molares con múltiples conductos, requiriendo remoción cuidadosa del material de obturación previo y resellado de todos los canales." },
      { code: "E.09", name: "Selle de perforación", detail: "Reparación de una perforación accidental o patológica en la raíz o piso de la cámara pulpar con materiales biocompatibles como MTA o Biodentine." },
      { code: "E.10", name: "Terapia Apical por sesión", detail: "Tratamiento por sesiones para resolver infecciones crónicas en la región apical del diente, aplicando medicamentos intraconducto entre cada cita." },
    ],
  },
  {
    id: "cirugia",
    name: "Cirugía Oral",
    description: "Procedimientos quirúrgicos especializados desde extracciones simples hasta cirugías complejas. Contamos con tecnología avanzada para procedimientos seguros y mínimamente invasivos.",
    icon: "Scissors",
    subServices: [
      { code: "C.01", name: "Exodoncia simple unirradicular", detail: "Extracción dental convencional de un diente con una sola raíz, como incisivos o caninos, utilizando técnicas atraumáticas para preservar el hueso." },
      { code: "C.02", name: "Exodoncia simple Multirradicular", detail: "Extracción de dientes con múltiples raíces como premolares y molares, requiriendo técnicas específicas de luxación y separación radicular cuando es necesario." },
      { code: "C.03", name: "Exodoncia simple Temporal", detail: "Extracción de dientes de leche (temporales) que no han caído naturalmente o que están causando problemas en la erupción de los dientes permanentes." },
      { code: "C.04", name: "Exodoncia Método Abierto simple", detail: "Extracción quirúrgica que requiere levantar un colgajo de encía para acceder al diente, utilizada cuando el diente está parcialmente impactado o fracturado." },
      { code: "C.05", name: "Exodoncia Método Abierto Compleja", detail: "Cirugía compleja para extraer dientes completamente impactados, cordales incluidas, que pueden requerir osteotomía y odontosección bajo anestesia local." },
      { code: "C.06", name: "Terapia de Botox Bruxismo", detail: "Inyección de toxina botulínica en los músculos maseteros para reducir la fuerza de apretamiento, aliviando el bruxismo, dolor mandibular y cefaleas tensionales." },
      { code: "C.07", name: "Bichetomía", detail: "Procedimiento quirúrgico estético para reducir las bolsas de Bichat (grasa en las mejillas), afinando el contorno facial y resaltando los pómulos." },
    ],
  },
  {
    id: "periodoncia",
    name: "Periodoncia",
    description: "Tratamiento de enfermedades de las encías y tejidos de soporte dental. Desde limpiezas profundas hasta cirugías periodontales para mantener encías sanas.",
    icon: "Heart",
    subServices: [
      { code: "P.01", name: "Raspaje y Alisado Radicular Campo abierto", detail: "Limpieza profunda quirúrgica de las raíces dentales con acceso directo mediante colgajo, eliminando cálculo subgingival y tejido infectado de bolsas periodontales." },
      { code: "P.02", name: "Alargamiento de Corona Clínica", detail: "Cirugía periodontal para exponer más estructura dental removiendo encía y/o hueso, necesaria para restaurar dientes fracturados o mejorar la estética gingival." },
      { code: "P.03", name: "Frenillectomía", detail: "Cirugía menor para eliminar o modificar el frenillo labial o lingual que causa restricción de movimiento, diastemas o problemas de ortodoncia." },
      { code: "P.04", name: "Elevación de seno Maxilar", detail: "Procedimiento quirúrgico que eleva la membrana del seno maxilar y coloca injerto óseo para aumentar la altura del hueso disponible para implantes en el maxilar superior." },
      { code: "P.05", name: "Estética Periodontal de Canino a Canino", detail: "Cirugía estética de las encías en la zona anterior (de canino a canino) para corregir sonrisa gingival, asimetrías o exceso de encía visible al sonreír." },
      { code: "P.06", name: "Ventana Quirúrgica", detail: "Procedimiento para exponer un diente retenido o impactado en el hueso, creando acceso para que la ortodoncia pueda traccionarlo a su posición correcta." },
      { code: "P.07", name: "Cirugía Exploratoria", detail: "Intervención quirúrgica diagnóstica para explorar y evaluar directamente tejidos orales sospechosos, tomar biopsias o identificar patologías no visibles en imágenes." },
    ],
  },
];
