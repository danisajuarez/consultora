import {
  FaChartLine,
  FaBoxes,
  FaUsers,
  FaClipboardList,
  FaProjectDiagram,
} from "react-icons/fa";
import Navbar from "./NavBar";
import Footer from "./Footer";

const services = [
  {
    title: "Diagnósticos",
    icon: <FaClipboardList />,
    description: `Determinamos la brecha entre la situación actual y el escenario deseado para optimizar recursos y tecnología.`,
  },
  {
    title: "Aumento de Volumen de Negocio",
    icon: <FaChartLine />,
    description: `Estrategias para mejorar producción, optimizar costos y aumentar competitividad en el mercado.`,
  },
  {
    title: "Gestión de Almacenes",
    icon: <FaBoxes />,
    description: `Soluciones para minimizar costos, reducir inventarios obsoletos y mejorar la administración del stock.`,
  },
  {
    title: "Desarrollo de Proveedores",
    icon: <FaUsers />,
    description: `Optimizamos la relación proveedor-cliente para mejorar calidad, tiempos de entrega y costos operativos.`,
  },
  {
    title: "Tablero de Comando",
    icon: <FaProjectDiagram />,
    description: `Herramienta de gestión estratégica para monitorear KPIs, optimizar decisiones y alinear la estrategia empresarial.`,
  },
];

export default function ConsultoriaPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 mt-22 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-600 to-indigo-500 text-white py-28 text-center">
          <h1 className="text-4xl font-bold">Consultoría para Empresas</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            Diagnósticos estratégicos y soluciones efectivas para potenciar la
            gestión empresarial.
          </p>
        </section>

        {/* Diagnósticos Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Nuestros Diagnósticos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col text-left hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-indigo-500"
              >
                <div className="text-indigo-600 text-4xl mx-auto">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="bg-gray-200 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Por qué elegir nuestra consultoría?
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Brindamos soluciones a medida para optimizar la gestión de tu
              empresa con estrategias innovadoras y efectivas.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            ¿Listo para mejorar tu empresa?
          </h2>
          <p className="text-gray-600 mt-2">
            Contáctanos y llevemos tu negocio al siguiente nivel.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition">
            Solicitar Consultoría
          </button>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
