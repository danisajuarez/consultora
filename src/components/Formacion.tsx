import {
  FaCheckCircle,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import Navbar from "./NavBar";
import Footer from "./Footer";

const courses = [
  {
    title: "Gestión de Calidad",
    icon: <FaChalkboardTeacher />,
    description:
      "Aprende a implementar y gestionar sistemas de calidad en tu empresa.",
  },
  {
    title: "Lean Manufacturing",
    icon: <FaProjectDiagram />,
    description:
      "Optimización de procesos para mejorar la productividad y reducir desperdicios.",
  },
  {
    title: "Transformación Digital",
    icon: <FaLaptopCode />,
    description:
      "Digitaliza procesos y mejora la eficiencia con nuevas tecnologías.",
  },
];

export default function Formacion() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 mt-22  min-h-screen">
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Formación Profesional</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            La mejor inversión que una empresa puede hacer es capacitar a su
            personal.
          </p>
        </section>

        {/* Sección de Introducción */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">
            La importancia de la formación
          </h2>
          <p className="text-lg text-gray-700">
            En <strong>Consultnnova</strong> estamos convencidos de que la
            formación del personal es la inversión más rentable que toda
            organización puede realizar. Los beneficios se prolongan en el
            tiempo gracias a la transformación que es posible lograr a través de
            recursos propios.
          </p>
          <p className="mt-4 text-gray-700">
            Ofrecemos un servicio de formación con diferentes enfoques y
            metodologías, adaptándonos a las necesidades de cada empresa.
            Nuestro objetivo es proporcionar los conocimientos teórico-prácticos
            necesarios para definir, implementar, evaluar y mejorar un proceso o
            sistema en general, según el nivel de capacitación requerido.
          </p>
        </section>

        {/* Beneficios / Preguntas destacadas */}
        <section className="bg-gray-200 py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              ¿Por qué invertir en formación?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-indigo-600 text-xl mt-1" />
                <p className="text-gray-800">
                  El retorno de inversión en formación es claramente
                  comprobable.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-indigo-600 text-xl mt-1" />
                <p className="text-gray-800">
                  Desarrollar al personal mejora la eficiencia y competitividad.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-indigo-600 text-xl mt-1" />
                <p className="text-gray-800">
                  Nuevas técnicas y metodologías ayudan a la transformación
                  digital.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaCheckCircle className="text-indigo-600 text-xl mt-1" />
                <p className="text-gray-800">
                  Si las condiciones del entorno cambian, el personal debe estar
                  preparado para enfrentarlas con éxito.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Lista de Cursos */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Nuestros Cursos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col text-left hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-indigo-500"
              >
                <div className="text-indigo-600 text-4xl mx-auto">
                  {course.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - Inscripción */}
        <section className="bg-gray-900 text-white py-16 text-center">
          <h2 className="text-2xl font-bold">
            ¿Listo para potenciar tu empresa?
          </h2>
          <p className="mt-2 text-gray-300">
            Inscribite hoy mismo y llevá tu formación al siguiente nivel.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-500 text-white text-lg rounded-lg hover:bg-indigo-700 transition">
            Inscribirme
          </button>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
