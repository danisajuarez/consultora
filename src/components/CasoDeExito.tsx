import Footer from "./Footer";
import Navbar from "./NavBar";

const casos = [
  {
    id: 1,
    organizacion: "Industria – Metalmecánica",
    proyecto: "Falta de espacio en Planta",
  },
  {
    id: 2,
    organizacion: "Industria – Electrónica",
    proyecto: "Problemas de Entrega a Cliente",
  },
  {
    id: 3,
    organizacion: "Industria – Manufacturas",
    proyecto: "Aumento de Ventas por Empleado",
  },
  {
    id: 4,
    organizacion: "Industria – Metalmecánica",
    proyecto:
      "Falta de Entrega – Problemas de Calidad en el Producto entregado",
  },
  {
    id: 5,
    organizacion: "Servicios – Administración Pública Tributaria",
    proyecto: "Falta de estandarización y de eficiencia",
  },
  {
    id: 6,
    organizacion: "Servicios – Fitness",
    proyecto: "Falta de Satisfacción de Cliente",
  },
];

export default function CasoDeExito() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white mt-20 py-20 text-center">
        <h1 className="text-4xl font-bold">Casos de Éxito</h1>
        <p className="text-lg mt-2 max-w-3xl mx-auto">
          Conocé cómo ayudamos a diferentes organizaciones a mejorar su
          rendimiento y alcanzar sus objetivos.
        </p>
      </section>

      {/* Lista de Casos */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Nuestros Casos de Éxito
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casos.map((caso) => (
            <div
              key={caso.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-indigo-600 text-xl font-semibold">
                Caso {caso.id}
              </h3>
              <p className="text-gray-700 mt-2">
                <strong>Tipo de organización:</strong> {caso.organizacion}
              </p>
              <p className="text-gray-700 mt-1">
                <strong>Definición inicial del Proyecto:</strong>{" "}
                {caso.proyecto}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
