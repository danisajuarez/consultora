const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/about.webp"
              alt="Consultnova - Quiénes somos"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              ¿Quiénes somos?
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              <strong>Consultnova</strong> nace en 2004 con la convicción de que
              las{" "}
              <span className="text-[#4C3C92] font-semibold">
                Pequeñas y Medianas organizaciones
              </span>
              pueden evolucionar hacia la excelencia aplicando los mismos
              sistemas y técnicas que utilizan las grandes empresas.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Desarrollamos actividades desde <strong>Rosario, Santa Fe</strong>
              , hacia todo el país y países limítrofes, generando soluciones a
              medida de cada cliente y adaptándonos a su cultura organizacional.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Nos enfocamos en la <strong>transferencia de conocimiento</strong>{" "}
              para facilitar el cambio, enseñando a hacer y asegurando que las
              técnicas sean comprendidas y aplicadas en el tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
