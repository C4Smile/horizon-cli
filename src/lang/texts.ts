const texts = {
  es: {
    input: {
      options: "Introduce la opción deseada: ",
      continue: "Presiona enter para continuar...",
    },
    main: {
      title: "Bienvenido a Horizon-cli",
      operations: [
        "1 - Iniciar sesión",
        "2 - Acerca de Horizon-cli",
        "3 - Salir",
      ],
      about: {
        title: "Acerca de Horizon-cli",
        body: "Versión modo consola del juego mmo Horizon.",
        author: "Desarrollado por",
        version: "Versión:",
      },
      login: {
        user: "Introduce tu usuario",
        password: "Introduce tu contraseña",
      },
    },
    errors: {
      invalidPassword: "Contraseña incorrecta",
      invalidInput: "Entrada inválida!",
    },
  },
};

export default texts;
