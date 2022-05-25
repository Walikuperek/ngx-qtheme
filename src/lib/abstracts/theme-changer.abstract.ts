import {ITheme} from "../interfaces/theme.interface";
import {BehaviorSubject} from "rxjs";

export default abstract class ThemeChanger {
  /**
   * @description Set theme passing new theme object
   * @param theme
   */
  abstract setTheme(theme: ITheme): void;

  /**
   * @description Set theme by name, basing on the currently saved list of themes
   * @param name
   */
  abstract setMemoTheme(name: string): void;

  /**
   * @description Observable of initialized theme
   */
  abstract $initializedTheme: BehaviorSubject<ITheme | null>;

  /**
   * @description Observable of currently saved theme
   */
  abstract $currentTheme: BehaviorSubject<ITheme | null>
}
