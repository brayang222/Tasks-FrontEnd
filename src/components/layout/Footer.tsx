import { TaskFlowIcon } from "./TaskFlowIcon";

export const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TaskFlowIcon
                classes={
                  "bg-white text-primary p-1 rounded mr-2 flex items-center"
                }
              />
            </div>
            <p className="text-gray-400">
              Simplifica tu vida con nuestra aplicación intuitiva de gestión de
              tareas.
            </p>
          </div>

          {[
            {
              title: "Producto",
              links: ["Características", "Precios", "Testimonios", "FAQ"],
            },
            {
              title: "Compañía",
              links: ["Sobre Nosotros", "Carreras", "Blog", "Contacto"],
            },
            {
              title: "Legal",
              links: [
                "Política de Privacidad",
                "Términos de Servicio",
                "Política de Cookies",
              ],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} TaskFlow. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
