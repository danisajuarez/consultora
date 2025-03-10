import Footer from "./Footer";
import Navbar from "./NavBar";

const Diagnostico360 = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="bg-indigo-600 mt-22 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Diagnóstico360°</h1>
        <p className="text-lg mt-2 max-w-3xl mx-auto">
          Una evaluación integral para detectar fortalezas y oportunidades de
          mejora en tu empresa.
        </p>
      </section>

      {/* Introducción */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">
          ¿Qué es el Diagnóstico360°?
        </h2>
        <p className="text-lg text-gray-700">
          El **Diagnóstico360°** es la base del proceso de mejora continua
          dentro de una organización. Evalúa **seis elementos
          interdependientes** que impactan en la eficiencia operativa. La mejora
          sostenida en el tiempo solo es posible si se optimizan todos los
          componentes simultáneamente.
        </p>
        <p className="mt-4 text-gray-700">
          Permite valorar el sistema productivo en cualquier organización **sin
          importar el sector industrial**, convirtiéndose en una poderosa
          herramienta de benchmarking interno.
        </p>
      </section>

      {/* Sección de Metodología */}
      <section className="bg-gray-200 py-12 px-6 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">
          Metodología del Diagnóstico
        </h2>
        <p className="text-lg text-gray-700 text-center">
          La evaluación se basa en 5 niveles de cumplimiento, analizando **seis
          elementos clave** y asignando una puntuación a cada uno.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            "Nivel de cumplimiento contra estándares establecidos",
            "Grado de Innovación Tecnológica",
            "Cumplimiento del Sistema de Gestión de Calidad ISO 9001:2015",
            "Fortalezas y debilidades de cada elemento",
            "Focalización de tareas para mejora",
            "Evaluación global del sistema",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 text-gray-800 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-indigo-600 text-2xl">✅</div>
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Espacio para la Imagen */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Cómo funciona el Diagnóstico360°
        </h2>
        <img
          src="/estadisticas.png"
          alt="Estadísticas del Diagnóstico360°"
          className="mx-auto rounded-lg shadow-md"
        />
      </section>

      {/* CTA - Diagnóstico Gratuito */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          ¡Solicitá tu Diagnóstico360° totalmente GRATIS!
        </h2>
        <p className="mt-2 text-gray-200">
          Aprovechá esta oportunidad para mejorar tu empresa sin costo alguno.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-200 transition">
          Obtener Diagnóstico Gratis
        </button>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Diagnostico360;
