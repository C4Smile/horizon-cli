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
        { label: "i - Iniciar sesión", logged: 0 },
        { label: "1 - Edificios", logged: 1 },
        { label: "2 - Investigaciones", logged: 1 },
        { label: "3 - Arsenal", logged: 1 },
        { label: "4 - Astillero", logged: 1 },
        { label: "5 - Flota", logged: 1 },
        { label: "6 - Mapa", logged: 1 },
        { label: "7 - Rutas Comerciales", logged: 1 },
        { label: "8 - Defensas", logged: 1 },
        { label: "c - Cerrar sesión", logged: 1 },
        { label: "a - Acerca de Horizon-cli", logged: -1 },
        { label: "z - Salir", logged: -1 },
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
      },
    },
    errors: {
      wrongCredentials: "Usuario o Contraseña incorrecta",
      invalidInput: "Entrada inválida!",
    },
  },
};

export default texts;
