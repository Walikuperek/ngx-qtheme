import {IThemeAtom} from '../interfaces/theme.interface';

export const setRootAtoms = (atoms: IThemeAtom[]): void => {
  for (const atom of atoms) {
    const [key, value] = atom;
    document.documentElement.style.setProperty(`--${key}`, value)
  }
}
