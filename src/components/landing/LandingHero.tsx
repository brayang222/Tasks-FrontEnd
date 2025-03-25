import image from "../../assets/interface.png";

export const LandingHero = () => {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
          Organiza tus tareas,{" "}
          <span className="text-tertiary">simplifica tú vida</span>
        </h1>
        <p className="text-lg text-tertiary font-normal mb-8 max-w-lg">
          TaskFlow te ayuda a manejar tus tareas diarias, incrementar
          productividad, y conseguir tus metas con una simple e intuitiva
          interfaz
        </p>
        <div className="flex flex-col sm:flex-row gap-4 *:px-8 *:py-3 *:rounded-md *:cursor-pointer *:text-white">
          <button className="flex items-center bg-primary">
            Empieza gratis
            <i
              className="icon-[material-symbols--arrow-forward] ml-2 h-5 w-5"
              role="img"
              aria-hidden="true"
            />
          </button>
          <button className="bg-tertiary ">Aprender más</button>
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
  );
};
