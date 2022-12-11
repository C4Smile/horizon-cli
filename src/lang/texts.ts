const texts = {
  es: {
    input: {
      options: "Introduce la opción deseada: ",
      continue: "Presiona enter para continuar...",
    },
    main: {
      title: "Bienvenido a Horizon-cli",
      user: "Usuario:",
      operations: [
        { name: "signIn", label: "Iniciar sesión", logged: 0, input: "i" },
        { name: "buildings", label: "Edificios", logged: 1, input: "1" },
        {
          name: "researches",
          label: "Investigaciones",
          logged: 1,
          input: "2",
        },
        { name: "arsenal", label: "Arsenal", logged: 1, input: "3" },
        { name: "dock", label: "Astillero", logged: 1, input: "4" },
        { name: "fleet", label: "Flota", logged: 1, input: "5" },
        { name: "map", label: "Mapa", logged: 1, input: "6" },
        { name: "routes", label: "Rutas Comerciales", logged: 1, input: "7" },
        { name: "defenses", label: "Defensas", logged: 1, input: "8" },
        { name: "signOut", label: "Cerrar sesión", logged: 1, input: "c" },
        {
          name: "about",
          label: "Acerca de Horizon-cli",
          logged: -1,
          input: "a",
        },
        { name: "exit", label: "Salir (Ctrl + c)", logged: -1, input: "z" },
      ],
      about: {
        title: "Acerca de Horizon-cli",
        body: "Versión modo consola del juego mmo Horizon.",
        author: "Desarrollado por",
        version: "Versión:",
      },
      login: {
        title: "Iniciar sesión",
        user: "Introduce tu usuario: ",
        password: "Introduce tu contraseña: ",
        successfully: "Sesión iniciada correctamente",
      },
      logout: {
        title: "Cerrando la sesión",
        successfully: "Sesión cerrada correctamente",
      },
    },
    success: {
      sessionRecovery: "Sesión recuperada usuario: ",
    },
    infos: {
      sessionExpired: "Ha expirada la sesión",
    },
    errors: {
      wrongCredentials: "Usuario o Contraseña incorrecta",
      invalidInput: "Entrada inválida!",
      whileReadingSession: "Error al leer sesión previa",
    },
  },
};

export default texts;
