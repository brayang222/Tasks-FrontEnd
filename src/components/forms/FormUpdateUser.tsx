export const FormUpdateUser = () => {
  return (
    <form>
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="role" className="block mb-2 font-medium">
          Rol
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccionar rol</option>
          <option value="admin">Admin</option>
          <option value="user">Usuario</option>
          <option value="guest">Visitante</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="bio" className="block mb-2 font-medium">
          Biografia
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          placeholder="Tell us about yourself"
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
        ></textarea>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
