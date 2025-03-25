export const LandingFeatures = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir TaskFlow?
          </h2>
          <p className="text-tertiary max-w-2xl mx-auto">
            Nuestra aplicación de gestión de tareas está diseñada para ayudarte
            a mantenerte organizado, enfocado y productivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: (
                <i
                  className="icon-[rivet-icons--check-circle-breakout] h-10 w-10 text-primary"
                  role="img"
                  aria-hidden="true"
                />
              ),
              title: "Gestión de Tareas Simple",
              description:
                "Crea, organiza y completa tareas con solo unos pocos clics. No se requiere configuración complicada.",
            },
            {
              icon: (
                <i
                  className="icon-[humbleicons--clock] h-10 w-10 text-primary"
                  role="img"
                  aria-hidden="true"
                />
              ),
              title: "Seguimiento del Tiempo",
              description:
                "Rastrea cuánto tiempo dedicas a cada tarea para mejorar tu productividad y gestión del tiempo.",
            },
            {
              icon: (
                <i
                  className="icon-[meteor-icons--calendar] h-10 w-10 text-primary"
                  role="img"
                  aria-hidden="true"
                />
              ),
              title: "Programación Inteligente",
              description:
                "Planifica tu día de manera eficiente con nuestro sistema de programación inteligente que prioriza tus tareas.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
