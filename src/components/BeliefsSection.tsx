import { FaCheckCircle } from "react-icons/fa";

const BeliefsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Creencias
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nuestra guía para ofrecer un servicio de excelencia.
          </p>
        </div>

        {/* Visión y Misión */}
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#4C3C92]">
            <h3 className="text-2xl font-semibold text-[#4C3C92]">
              Nuestra Visión
            </h3>
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              Ser reconocidos por cada Cliente por la eficacia de nuestro
              trabajo y por la honestidad y el compromiso de nuestra Gente.
            </p>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#4C3C92]">
            <h3 className="text-2xl font-semibold text-[#4C3C92]">
              Nuestra Misión
            </h3>
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              Proveer servicios de Consultoría y Formación en Lean
              Manufacturing, Gestión de la Calidad y Planeación Estratégica con
              un enfoque integral en cada Organización Cliente.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
            Nuestros Valores
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Honestidad",
                description:
                  "Respeto por nuestros Clientes, sus bienes y compromisos. Honestidad Intelectual para aceptar desafíos acordes a nuestras aptitudes.",
              },
              {
                title: "Servicio",
                description:
                  "Cada solicitud de nuestros Clientes es una muestra de confianza. Nos esforzamos por mejorar en cada oportunidad.",
              },
              {
                title: "Confidencialidad",
                description:
                  "Toda información que recibimos de nuestros Clientes es tratada con máxima discreción y seguridad.",
              },
              {
                title: "Trabajo en equipo",
                description:
                  "Fomentamos la confianza, los objetivos comunes y el respeto mutuo para lograr resultados excepcionales.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-md rounded-lg p-6"
              >
                <FaCheckCircle className="text-[#4C3C92] text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-[#4C3C92]">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-gray-700 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
