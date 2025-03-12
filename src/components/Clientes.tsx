import React from "react";
import Slider, { Settings } from "react-slick";
import clientesData from "./clientes.json"; // Ajusta la ruta si es necesario
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa íconos para las flechas
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Interfaz del objeto cliente
interface Cliente {
  nombre: string;
  imagen: string;
  sector: string;
  ubicacion: string;
}

// Función genérica para dividir un array en bloques de tamaño 'size'
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

// Flecha "Siguiente"
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 
                 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 
                 z-10"
      aria-label="Siguiente"
    >
      <HiOutlineChevronRight size={24} />
    </button>
  );
};

// Flecha "Anterior"
const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 
                 bg-gray-600 text-white rounded-full p-2 hover:bg-gray-600 
                 z-10"
      aria-label="Anterior"
    >
      <HiOutlineChevronLeft size={24} />
    </button>
  );
};

const TresCarruseles: React.FC = () => {
  // Obtenemos la lista de clientes desde el JSON
  const clientes: Cliente[] = clientesData as Cliente[];

  // Dividimos el array en 3 partes
  const chunkSize = Math.ceil(clientes.length / 3);
  const chunkedClients = chunkArray(clientes, chunkSize);

  // Configuración del carrusel
  const settings: Settings = {
    dots: false, // Sin puntitos de navegación
    arrows: true, // Con flechas
    nextArrow: <NextArrow />, // Flecha personalizada de "siguiente"
    prevArrow: <PrevArrow />, // Flecha personalizada de "anterior"
    autoplay: true, // Se desplaza automáticamente
    autoplaySpeed: 2000, // Intervalo de 2s para el auto-scroll
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de la animación
    slidesToShow: 4, // Número de tarjetas visibles en pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center relative">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Nuestros Clientes
      </h2>
      <p className="text-lg text-gray-700 mb-12">
        Empresas líderes confían en nosotros para mejorar sus procesos. ¿Te
        gustaría ser la próxima?
      </p>

      {/* Renderizamos 3 carruseles independientes */}
      {chunkedClients.map((grupo, index) => (
        <div key={index} className="mb-16 relative">
          {/* Puedes agregar un subtítulo o eliminarlo */}
          <Slider {...settings}>
            {grupo.map((cliente, idx) => (
              <div key={idx} className="p-4">
                <div
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 
                                flex flex-col items-center text-center 
                                hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={cliente.imagen}
                    alt={cliente.nombre}
                    className="w-full h-24 object-contain mb-3"
                  />
                  <h4 className="text-[13px] font-semibold text-gray-900">
                    {cliente.nombre}
                  </h4>
                  <p className="text-sm text-gray-600">{cliente.sector}</p>
                  <p className="text-xs text-gray-500">{cliente.ubicacion}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default TresCarruseles;
