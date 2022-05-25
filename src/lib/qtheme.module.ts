import {ModuleWithProviders, NgModule, Optional} from '@angular/core';
import {IThemeConfig} from './interfaces/theme-config.interface';
import {THEME_CONFIG} from './qtheme-config.token';

import {mapAtomKeysToKebabCase} from './helpers/map-to-kebab-case.helper';

@NgModule()
export class QthemeModule {
  static config(@Optional() opts?: IThemeConfig): ModuleWithProviders<QthemeModule> {
    let themes = opts?.themes || [];
    if (opts) {
      themes = mapAtomKeysToKebabCase(themes);
    }
    return {
      ngModule: QthemeModule,
      providers: [
        {
          provide: THEME_CONFIG,
          useValue: {
            initTheme: opts?.initTheme || null,
            themes
          }
        }
      ]
    };
  }
}
