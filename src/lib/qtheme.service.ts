import {Inject, Injectable} from '@angular/core';
import {THEME_CONFIG} from './qtheme-config.token';
import {IThemeConfig} from './interfaces/theme-config.interface';
import {ITheme} from './interfaces/theme.interface';
import {BehaviorSubject} from 'rxjs';
import {setRootAtoms} from './helpers/set-root-atoms.helper';
import WrongThemeNameError from './exceptions/wrong-theme-name.error';
import ThemeChanger from './abstracts/theme-changer.abstract';


@Injectable({
  providedIn: 'root'
})
export class QthemeService extends ThemeChanger {
  /**
   * Observable of initialized theme in (mostly in app.module.ts)
   * ```
   * imports: [
   *    QthemeModule.config({
   *      initTheme: darkTheme
   *    })
   * ]
   * ```
   */
  public $initializedTheme: BehaviorSubject<ITheme | null> = new BehaviorSubject<ITheme | null>(null);

  /**
   * Observable of currently saved theme
   * @example usage
   * import {QthemeService} from 'qtheme';
   * constructor(public theme: QthemeService) {}
   *
   * <ng-container *ngIf='theme.$currentTheme | async as currentTheme'>
   *  {{ currentTheme | json }}
   * </ng-container>
   */
  public $currentTheme: BehaviorSubject<ITheme | null> = new BehaviorSubject<ITheme | null>(null);

  private _initTheme: ITheme | null = null;
  private _themes: ITheme[] = [];

  constructor(@Inject(THEME_CONFIG) config: IThemeConfig) {
    super();
    this._init(config);
  }

  /**
   * Set theme with provided theme of type ITheme.
   *
   * @example usage
   * import {QthemeService} from 'qtheme';
   * constructor(public theme: QthemeService) {}
   *
   * onThemeChange(theme: ITheme) {
   *  this.theme.setTheme(theme);
   * }
   */
  public setTheme(theme: ITheme): void {
    setRootAtoms(theme.atoms);
    this.$currentTheme.next(theme);
  }

  /**
   * Set theme by name of the theme.
   *
   * @example usage
   * [app.module.ts]
   * import { YourLightTheme } from 'src/app/theming/your-light-theme.theme.ts'
   * import { YourDarkTheme } from 'src/app/theming/your-dark-theme.theme.ts'
   * imports: [
   *    QthemeModule.config({
   *      themes: [
   *        YourLightTheme, // has name 'light'
   *        YourDarkTheme // has name 'dark'
   *      ]
   *      ...,
   *    })
   * ]
   *
   * [your.component.ts | your.service.ts | custom]
   * import {QthemeService} from 'qtheme';
   * constructor(public theme: QthemeService) {}
   *
   * // example of some change that gives new themeName
   * onThemeChange(themeName: string | EnumOfYourThemes) {
   *  this.theme.setMemoTheme(themeName);
   * }
   */
  public setMemoTheme(name: string): void {
    const theme = this._themes.find(theme => theme.name === name);
    if (theme) {
      this.setTheme(theme);
    } else {
      throw new WrongThemeNameError(name);
    }
  }

  private _init(config: IThemeConfig): void {
    if (config && config.themes) {
      this._themes = config.themes;
    }

    this._initTheme = config.initTheme;
    if (this._initTheme) {
      this.setTheme(this._initTheme);
      this.$initializedTheme.next(this._initTheme);
    }
  }
}
