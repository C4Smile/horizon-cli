const texts = {
  es: {
    input: {
      options: "Introduce la opción deseada: ",
      continue: "Presiona enter para continuar...",
    },
    resources: {
      materials: "Materiales",
      metals: "Metales",
      supplies: "Suministros",
      coins: "Riqueza",
    },
    main: {
      title: "Bienvenido a Horizon-cli",
      user: "Usuario:",
      operations: [
        {
          name: "signIn",
          label: "Iniciar sesión",
          logged: 0,
          input: "i",
          exit: false,
        },
        {
          name: "manager",
          label: "Gestión",
          logged: 1,
          input: "1",
          exit: false,
        },
        {
          name: "dock",
          label: "Astillero",
          logged: 1,
          input: "2",
          exit: false,
        },
        {
          name: "signOut",
          label: "Cerrar sesión",
          logged: 1,
          input: "c",
          exit: false,
        },
        {
          name: "about",
          label: "Acerca de Horizon-cli",
          logged: -1,
          input: "a",
          exit: false,
        },
        {
          name: "exit",
          label: "Salir (Ctrl + c)",
          logged: -1,
          input: "z",
          exit: true,
        },
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
    manager: {
      title: "Gestión",
      operations: [
        { name: "buildings", label: "Edificios", input: "1", exit: false },
        {
          name: "researches",
          label: "Investigaciones",
          input: "2",
          exit: false,
        },
        { name: "arsenal", label: "Arsenal", input: "3", exit: false },
        { name: "defenses", label: "Defensas", input: "4", exit: false },
        { name: "back", label: "Volver", input: "b", exit: true },
      ],
    },
    dock: {
      title: "Astillero",
      operations: [
        { name: "fleet", label: "Flota", input: "1", exit: false },
        { name: "map", label: "Mapa", input: "2", exit: false },
        { name: "routes", label: "Rutas Comerciales", input: "3", exit: false },
        { name: "back", label: "Volver", input: "b", exit: true },
      ],
    },
    success: {
      sessionRecovery: "Sesión recuperada usuario:",
    },
    infos: {
      sessionExpired: "Ha expirada la sesión",
      recoveringSession: "Se ha encontrado una sesión previa",
    },
    errors: {
      wrongCredentials: "Usuario o Contraseña incorrecta",
      invalidInput: "Entrada inválida!",
      whileReadingSession: "Error al leer sesión previa",
    },
  },
};

export default texts;
