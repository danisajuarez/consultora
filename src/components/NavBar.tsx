import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-3 bg-white/100 backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto px-6 py-3  flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <img src="/logo.jpg" alt="Consultnova" className="h-10" />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden capitalize md:flex font space-x-6">
          {[
            "consultoría",
            "formación",
            "lean360°",
            "diagnóstico360°",
            "casos de éxito",
            "contacto",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-[#392E71] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden capitalize  bg-white shadow-md">
          {[
            "consultoría",
            "formación",
            "lean360°",
            "diagnóstico360°",
            "casos de éxito",
            "contacto",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
