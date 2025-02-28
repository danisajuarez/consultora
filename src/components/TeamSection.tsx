const teamMembers = [
  {
    name: "Guillermo Martínez",
    image: "/equipo.webp", // Reemplázalo con la URL real
    description:
      "Socio Fundador. Consultor Senior. Es Ingeniero Mecánico de la Universidad Nacional de Rosario. Postgrado Alta Dirección y Negocios Internacionales. Es Lead Assessor of Quality Systems, Lean Manufacturing Sensei, Six Sigma Champion y Project Manager. A cargo de proyectos de más de 100 proyectos de Lean Manufacturing, Gestión de Calidad y Planeación Estratégica.",
  },
  {
    name: "Cintia Ledesma",
    image: "/equipo.webp",
    description:
      "Socio Fundador. Consultor Senior. Es Ingeniero Mecánico de la Universidad Nacional de Rosario. Postgrado Alta Dirección y NegociosInternacionales. Es Lead Assessor of Quality Systems, Lean Manufacturing Sensei, Six Sigma Champion y Project Manager.A cargo de proyectos de más de 100 proyectos de Lean Manufacturing, Gestión de Calidad y Planeación Estratégica.",
  },
  {
    name: "Marianela Chehem",
    image: "/equipo.webp",
    description:
      "Socio Fundador. Consultor Senior. Es Ingeniero Mecánico de la Universidad Nacional de Rosario. Postgrado Alta Dirección y NegociosInternacionales. Es Lead Assessor of Quality Systems, Lean Manufacturing Sensei, Six Sigma Champion y Project Manager.A cargo de proyectos de más de 100 proyectos de Lean Manufacturing, Gestión de Calidad y Planeación Estratégica.",
  },
  {
    name: "Fernando Martínez",
    image: "/equipo.webp",
    description:
      "Socio Fundador. Consultor Senior. Es Ingeniero Mecánico de la Universidad Nacional de Rosario. Postgrado Alta Dirección y Negocios Internacionales. Es Lead Assessor of Quality Systems, Lean Manufacturing Sensei, Six Sigma Champion y Project Manager. A cargo de proyectos de más de 100 proyectos de Lean Manufacturing, Gestión de Calidad y Planeación Estratégica.",
  },
  {
    name: "Guillermo Paquez",
    image: "/equipo.webp",
    description:
      "Socio Fundador. Consultor Senior. Es Ingeniero Mecánico de la Universidad Nacional de Rosario. Postgrado Alta Dirección y Negocios Internacionales. Es Lead Assessor of Quality Systems, Lean Manufacturing Sensei, Six Sigma Champion y Project Manager. A cargo de proyectos de más de 100 proyectos de Lean Manufacturing, Gestión de Calidad y Planeación Estratégica.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full border-4 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
