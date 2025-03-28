import { LandingFeatures } from "./LandingFeatures";
import { LandingHero } from "./LandingHero";
import { LandingTestimonials } from "./LandingTestimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-secondary">
      <LandingHero />
      <LandingFeatures />
      <section className="py-20" id="how-works">
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
      <LandingTestimonials />
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
            <button className="px-8 border-white border-2 flex items-center py-3 rounded-md cursor-pointer text-white">
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
