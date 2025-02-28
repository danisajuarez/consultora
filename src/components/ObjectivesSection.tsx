import { FaCheckCircle } from "react-icons/fa";

const ObjectivesSection = () => {
  const objectives = [
    "Contribuir a la competitividad de las organizaciones de la región, colaborando a elevar su performance dentro de un mercado altamente globalizado.",
    "Contribuir a la mejora de las organizaciones a través de la transmisión de los conceptos de Lean Manufacturing y sus técnicas asociadas.",
    "Difundir los principios de la Gestión de la Calidad, como una herramienta de mejora sobre la eficacia en las organizaciones.",
    "Difundir la integración entre el Lean Manufacturing y la Gestión de Calidad, buscando la excelencia en las organizaciones.",
    "Asesorar a las empresas en la implementación de estas disciplinas.",
    "Fomentar en las organizaciones la mejora continua como forma de vida.",
    "Formar recursos humanos capaces de aportar soluciones y mejoras que permitan resolver diferentes problemas de gestión dentro de sus empresas.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Objetivos de la Consultora
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nos enfocamos en impulsar la mejora continua y la excelencia en las
            organizaciones mediante estrategias efectivas y formación
            especializada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {objectives.map((objective, index) => (
            <div key={index} className="flex items-start space-x-4">
              <FaCheckCircle className="text-[#4C3C92] text-2xl flex-shrink-0" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {objective}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
