import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Simula un envío exitoso
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
        <p className="text-gray-600 mt-2">
          Déjanos tu consulta y te responderemos lo antes posible.
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold mt-6">
            ✅ ¡Mensaje enviado con éxito!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-left font-medium">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-left font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-left font-medium">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
