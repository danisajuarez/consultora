import {
  FaCheckCircle,
  FaIndustry,
  FaCogs,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import Navbar from "./NavBar";

import Footer from "./Footer";

const Lean360 = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50  mt-22">
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Lean Manufacturing & Lean360°</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            Optimización de procesos para reducir desperdicios y mejorar la
            eficiencia operativa.
          </p>
        </section>
        {/* Sección Lean Manufacturing */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">
            ¿Qué es Lean Manufacturing?
          </h2>
          <p className="text-lg text-gray-700">
            El desperdicio del tiempo es el más común de todos los desperdicios
            en un proceso, ya sea productivo o administrativo. Lean
            Manufacturing se basa en la **eliminación de actividades que no
            agregan valor**, impactando en la reducción de costos operativos y
            generando una ventaja competitiva significativa.
          </p>
          <p className="mt-4 text-gray-700">
            Tanto en servicios como en manufactura, Lean ayuda a definir
            **Cadenas de Valor**, optimizando el uso de capital, materiales y
            costos a lo largo de un proceso. La reducción de desperdicios en
            estas cadenas es clave para mejorar la eficiencia y rentabilidad.
          </p>
        </section>
        {/* Sección Lean360° */}
        <section className="bg-gray-200 py-12 px-6 max-w-5xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">
            ¿Qué es Lean360°?
          </h2>
          <p className="text-lg text-gray-700">
            Muchas empresas implementan Lean Manufacturing aplicando solo una o
            dos técnicas en procesos productivos. Sin embargo, esto **no genera
            un cambio cultural profundo**. Lean360° **lleva Lean a toda la
            organización**, incluyendo procesos administrativos y logísticos,
            mejorando la productividad a corto, mediano y largo plazo.
          </p>
        </section>
        {/* Beneficios de Lean360° */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Beneficios de Lean360°
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Mejora la Calidad del producto/servicio",
                icon: <FaCheckCircle />,
              },
              {
                text: "Reducción de inventarios y mejora del Cash Flow",
                icon: <FaIndustry />,
              },
              {
                text: "Optimización de tiempos de proceso y respuesta al cliente",
                icon: <FaChartLine />,
              },
              { text: "Mayor flexibilidad organizacional", icon: <FaCogs /> },
              { text: "Mejor utilización de recursos", icon: <FaUsers /> },
              {
                text: "Mayor compromiso del personal",
                icon: <FaCheckCircle />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 text-gray-800 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-indigo-600 text-3xl">{item.icon}</div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </section>{" "}
        {/* Importancia de la toma de decisiones basadas en datos */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">
            Tomar decisiones con datos reales
          </h2>
          <p className="text-lg text-gray-700">
            Es común que dueños, directores y gerentes de empresa tomen
            decisiones sin conocer datos reales de su negocio. Muchas veces,
            estas decisiones se basan en números erróneos o suposiciones
            incorrectas, lo que genera una desventaja competitiva y perjudica el
            desempeño general de la organización.
          </p>
          <p className="mt-4 text-gray-700">
            Sin conocer **la Disponibilidad de equipos, la Eficiencia de la
            operación o el Nivel de Calidad real**, las empresas pueden
            sobrestimar sus capacidades y enfrentar problemas graves.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Un error común: sobrestimar el OEE
            </h3>
            <p className="text-gray-700 mt-2">
              Muchas empresas operan con una OEE (Efectividad Global de Equipos)
              del 50% sin un proceso de mejora estructurado. Sin embargo, pueden
              creer erróneamente que operan al 80%.
            </p>
            <p className="text-gray-700 mt-2">
              Basar decisiones en un OEE incorrecto puede llevar a
              **incumplimientos en entregas, uso excesivo de horas extras,
              problemas de calidad y seguridad**, impactando negativamente la
              rentabilidad.
            </p>
          </div>
          <p className="mt-6 text-gray-700">
            En general, **la falta de herramientas para analizar y resolver
            problemas** hace que las organizaciones repitan los mismos errores
            una y otra vez. Implementar Lean360° permite identificar problemas
            reales y corregirlos a tiempo.
          </p>
        </section>
        {/* CTA Final */}
        <section className="bg-gray-900 text-white py-16 text-center">
          <h2 className="text-2xl font-bold">
            ¿Listo para optimizar tu empresa?
          </h2>
          <p className="mt-2 text-gray-300">
            Contactanos y llevemos tu negocio al siguiente nivel con Lean360°.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-500 text-white text-lg rounded-lg hover:bg-indigo-700 transition">
            Solicitar Asesoría
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Lean360;
