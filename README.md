# Tasks Front-End

Este es el repositorio del front-end de la aplicación **Tasks**, una herramienta para la gestión de tareas que permite a los usuarios organizar, priorizar y completar sus actividades de manera eficiente. Este proyecto está desarrollado con **React**, **TypeScript** y **Vite**.

[Página](https://tasks-front-end.vercel.app)

El back-end de la aplicación está desplegado en **Railway** y puedes encontrar su repositorio aquí: [Tasks Back-End](https://github.com/brayang222/Tasks-BackEnd.git).

---

## 🚀 Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo rápida para proyectos de front-end.
- **Tailwind CSS**: Framework de utilidades CSS para estilos rápidos y consistentes.
- **Axios**: Cliente HTTP para realizar solicitudes al back-end.
- **Railway**: Plataforma de despliegue utilizada para el back-end y la base de datos.

---

## 📦 Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/brayang222/Tasks-FrontEnd.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Tasks-FrontEnd
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

   ```env
   VITE_BACKEND_URL=https://<tu-backend-en-railway>.railway.app
   ```

   Reemplaza `<tu-backend-en-railway>` con la URL de tu back-end desplegado en Railway.

5. Inicia el servidor de desarrollo:

   ```bash
   bun run dev
   ```

6. Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación.

---

## 🛠️ Funcionalidades

- **Gestión de tareas**: Crear, actualizar, eliminar y listar tareas.
- **Autenticación**: Inicio de sesión y registro de usuarios.
- **Filtros y búsqueda**: Filtra tareas por estado o busca por título.
- **Interfaz intuitiva**: Diseñada con Tailwind CSS para una experiencia de usuario moderna y responsiva.

---

## 🌐 Back-End

El back-end de esta aplicación está desarrollado con **Node.js**, **Express** y **MySQL**. Puedes encontrar el repositorio del back-end aquí:

[Tasks Back-End](https://github.com/brayang222/Tasks-BackEnd.git)

---

## 📄 Scripts disponibles

En el proyecto, puedes ejecutar los siguientes comandos:

- `bun dev`: Inicia el servidor de desarrollo.
- `bun run build`: Genera una versión optimizada para producción.
- `bun run preview`: Previsualiza la aplicación después de construirla.
- `bun run lint`: Ejecuta ESLint para analizar el código.

---

<!--
## 🖼️ Capturas de pantalla

> Agrega aquí capturas de pantalla de tu aplicación para mostrar su diseño y funcionalidad.

--- -->

## 🚀 Despliegue

El front-end está desplegado en plataformas como **Vercel**, **Railway**. Asegúrate de configurar correctamente la variable de entorno `VITE_BACKEND_URL` en la plataforma de despliegue.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme:

- **Autor**: Brayan Vargas Gómez.
- **Correo**: brayangomez521@gmail.com
- **Repositorio del proyecto**: [Tasks Front-End](https://github.com/brayang222/Tasks-FrontEnd.git)
