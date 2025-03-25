export const LandingTestimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a miles de usuarios satisfechos que han transformado su
            productividad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "TaskFlow ha cambiado completamente cómo gestiono mis tareas diarias. ¡Soy más productivo que nunca!",
              name: "Sarah Johnson",
              title: "Gerente de Marketing",
            },
            {
              quote:
                "La simplicidad y el poder de TaskFlow no tienen comparación. Se ha convertido en una parte esencial de mi flujo de trabajo.",
              name: "Michael Chen",
              title: "Desarrollador de Software",
            },
            {
              quote:
                "He probado muchas aplicaciones de tareas, pero TaskFlow es la única que se quedó. Es intuitiva y efectiva.",
              name: "Emma Rodriguez",
              title: "Diseñadora Freelance",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
