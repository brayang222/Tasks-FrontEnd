import image from "../assets/interface.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Organiza tus tareas,{" "}
            <span className="text-tertiary">simplifica tú vida</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            TaskFlow te ayuda a manejar tus tareas diarias, incrementar
            productividad, y conseguir tus metas con una simple e intuitiva
            interfaz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 *:px-8 *:py-3 *:rounded-md *:cursor-pointer">
            <button className="flex items-center bg-primary">
              Empieza gratis
              <i
                className="icon-[material-symbols--arrow-forward] ml-2 h-5 w-5"
                role="img"
                aria-hidden="true"
              />
            </button>
            <button className="bg-tertiary">Aprender más</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-xl"></div>
            <img
              src={image}
              alt="TaskFlow App Interface"
              className="rounded-xl shadow-2xl relative z-1 border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir TaskFlow?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra aplicación de gestión de tareas está diseñada para
              ayudarte a mantenerte organizado, enfocado y productivo.
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona TaskFlow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comienza en minutos y transforma tu productividad.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Regístrate",
                description: "Crea tu cuenta gratuita en segundos",
              },
              {
                step: "2",
                title: "Añade Tareas",
                description: "Añade y organiza tus tareas rápidamente",
              },
              {
                step: "3",
                title: "Rastrea el Progreso",
                description: "Monitorea la finalización y mantente motivado",
              },
              {
                step: "4",
                title: "Alcanza Metas",
                description: "Completa tareas y alcanza tus objetivos",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col text-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para aumentar tu productividad?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
              Únete a miles de usuarios que han transformado su experiencia de
              gestión de tareas con TaskFlow.
            </p>
            <button className="px-8 border-white border-2 flex items-center py-3 rounded-md cursor-pointer">
              Comienza Gratis
              <i
                className="icon-[material-symbols--arrow-forward] ml-2 h-5 w-5"
                role="img"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
