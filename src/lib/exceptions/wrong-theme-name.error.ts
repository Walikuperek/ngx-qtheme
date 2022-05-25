export default class WrongThemeNameError extends Error {
  constructor(themeName: string) {
    super(`WrongThemeNameError: Not found theme name: ${themeName}
    Maybe you forgot to add theme to config module?

    app.module.ts: imports: [
      QthemeModule.config({
        initTheme: darkTheme,
        themes: [lightTheme, darkTheme]
      })
    ]
    `);
  }
}
