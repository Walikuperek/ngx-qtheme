/**
 * @description Base css :root variable [key, value]
 * ```
 * example: ['bg-dark', '#333']
 * ```
 * */
export type IThemeAtom = [string, string];

/**
 * @description Theme interface used for theme configuration file
 *
 * ```
 * Used for dynamic change :root css variables.
 * ```
 *
 * @example
 * ============================================
 * Theme - dark.theme.ts
 * ============================================
 * export const darkTheme: ITheme = {
 *    name: string (then used as a theme identifier)
 *    atoms: [
 *      [key, value],
 *      ['bg', '#333'],
 *      ['text-color', 'hsl(100, 100%, 50%)'],
 *      ['action-primary', 'rgba(100, 242, 123, 0.8)'],
 *      ...
 *    ]
 * }
 *
 * ============================================
 * Extended Theme - light.theme.ts
 * ============================================
 * interface IExtendedTheme extends ITheme {
 *   myCustomProperty: string;
 * }
 *
 * export const extendedLightTheme: IExtendedTheme = {
 *   myCustomProperty: 'myCustomProperty',
 *   name: 'light',
 *   atoms: [
 *     ['bg', 'rgb(239, 239, 239)'],
 *     ...
 *   ]
 * };
 */
export interface ITheme {
  name: string;
  atoms: IThemeAtom[];
}
