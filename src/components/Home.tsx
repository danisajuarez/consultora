import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HeroHome from "./HeroHome";
import AboutSection from "./AboutSection";
import ObjectivesSection from "./ObjectivesSection";
import BeliefsSection from "./BeliefsSection";
import TeamSection from "./TeamSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

const Home = () => {
  const news = [
    {
      id: 1,
      text: "   Implantación de la Cultura de Mejora Continua basada en Lean Manufacturing",
    },
    {
      id: 1,
      text: " Lo ayudamos a gestionar el CAMBIO en su organización. Solicite un Diagnóstico 360° totalmente gratis",
    },
    {
      id: 1,
      text: " Implantación de Sistemas de Gestión de Calidad a la medida del Cliente",
    },
    {
      id: 1,
      text: " “Somos lo que hacemos día a día. La excelencia no es un acto sino un hábito” – Aristóteles",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <>
      <NavBar />
      <section className="relative w-full mt-9 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
        <img
          src="/banner.jpg"
          alt="Imagen de portada"
          className="w-full lg:z-40 h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Fondo más suave */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 shadow-lg ">
          {news[currentIndex].text}
        </div>{" "}
        {/* Texto con sombra y filtro de fondo */}
      </section>
      <HeroHome />
      <AboutSection></AboutSection>
      <ObjectivesSection></ObjectivesSection>
      <BeliefsSection></BeliefsSection>
      <TeamSection></TeamSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
