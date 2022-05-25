import {ITheme} from '../interfaces/theme.interface';

export const mapToKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const mapAtomKeysToKebabCase = (themes: ITheme[]) => {
  return themes.map(theme => {
    theme.atoms.map(atom => {
      atom = [mapToKebabCase(atom[0]), atom[1]];
      return atom;
    });
    return theme;
  });
}
