import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Información de Contacto */}
        <div>
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p className="text-gray-400 mt-2">📍 Dirección de la empresa</p>
          <p className="text-gray-400 mt-1">📧 contacto@consultnnova.com</p>
          <p className="text-gray-400 mt-1">📞 +54 11 1234-5678</p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-lg font-semibold">Navegación</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li>
              <a href="/consultoria" className="hover:text-indigo-400">
                Consultoría
              </a>
            </li>
            <li>
              <a href="/formacion" className="hover:text-indigo-400">
                Formación
              </a>
            </li>
            <li>
              <a href="/lean360" className="hover:text-indigo-400">
                Lean360°
              </a>
            </li>
            <li>
              <a href="/diagnostico360" className="hover:text-indigo-400">
                Diagnóstico360°
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-indigo-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex justify-center sm:justify-start mt-3 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ConsultnNova - Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
