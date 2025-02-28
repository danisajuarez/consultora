const HeroHome = () => {
  return (
    <section className="relative py-20  bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Ayudamos a organizaciones de todos los sectores a ser más
              productivos
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A través de nuestros servicios de <strong>consultoría</strong> y{" "}
              <strong>formación</strong> en técnicas de
              <span className="text-[#4C3C92] font-semibold">
                {" "}
                Mejora Continua
              </span>{" "}
              y
              <span className="text-[#4C3C92] font-semibold">
                {" "}
                Lean Manufacturing
              </span>
              .
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Nuestro compromiso es brindar un servicio de excelencia,
              ofreciendo soluciones integrales o desarrollando actividades
              puntuales con una visión interprofesional.
            </p>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/over.jpg"
              alt="Consultoría y Formación"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
