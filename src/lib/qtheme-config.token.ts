import {InjectionToken} from '@angular/core';
import {IThemeConfig} from './interfaces/theme-config.interface';

export const THEME_CONFIG = new InjectionToken<IThemeConfig>('THEME_CONFIG');
