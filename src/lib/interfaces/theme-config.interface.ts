import {ITheme} from './theme.interface';

/**
 * @description Theme interface used for theme configuration file
 */
export interface IThemeConfig {
  initTheme: ITheme;
  themes?: ITheme[];
}
