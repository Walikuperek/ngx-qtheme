# ngx-Qtheme
Theming library for Angular application. Made to work with Angular `13.X.X`.

[https://www.npmjs.com/package/ngx-qtheme](https://www.npmjs.com/package/ngx-qtheme)

Probably with future `14` will run without any problems at all.

### Example project with ngx-qtheme usage
[https://github.com/Walikuperek/ngx-qhteme-example](https://github.com/Walikuperek/ngx-qhteme-example)

## Looking for easy dark/light/custom elements?
Qtheme is providing abillity to use just ```eg class="bg"``` to add dynamic background.

You can switch themes with Qtheme.service
```
[your.component.ts || your.service.ts || your.directive.ts || your.pipe.ts || custom]

import { yourTheme } from 'your-angular-app/src/app/theming/your-theme.theme.ts';

constructor(public theme: QthemeService) {
  this.theme.setTheme(yourTheme);
}
```

## How to install library?
1. Go into location of your Angular application in terminal
2. Add Qtheme library to your Angular project: ```ng add ngx-qtheme```


## How to use library?
1. Create folder: `your-angular-app/src/app/theming`

2. Create 2 different theme config files(You should have same keys in every file to override): 
```
-----------------------------------------------
@Below example theming/dark.theme.ts

import {ITheme} from 'ngx-qtheme';

export const darkTheme: ITheme = {
  name: 'dark',
  atoms: [
    ['bg', 'rgb(28,36,48)'],
    ['bg-darker', 'rgb(18,23,35)'],

    ['text', '#fff'],
    ['text-muted', '#9e9e9e'],
    ['text-primary', 'rgb(116, 127, 242)'],

    ['action', 'rgb(58,58,58)'],
    ['action-text', 'rgb(255,255,255)'],
    ['action-primary', 'rgb(74,63,219)'],
    ['action-primary-text', 'rgb(255,255,255)'],
    ['action-secondary', 'rgb(140,141,145)'],
    ['action-secondary-text', 'rgb(255,255,255)']
  ]
};
```
```
-----------------------------------------------
@Below example of extended theme theming/light.theme.ts

/**
 * Yu can extend theme with your properties if needed.
 */
interface IExtendedTheme extends ITheme {
  myCustomProperty: string;
}

export const extendedLightTheme: IExtendedTheme = {
  myCustomProperty: 'myCustomProperty',
  name: 'light',
  atoms: [
    ['bg', 'rgb(239, 239, 239)'],
    ['bg-darker', 'rgb(210, 210, 210)'],

    ['text', '#212121'],
    ['text-muted', '#adadad'],
    ['text-primary', 'rgb(17,133,245)'],

    ['action', 'rgb(203,203,203)'],
    ['action-text', 'rgb(0,0,0)'],
    ['action-primary', 'rgb(17,133,245)'],
    ['action-primary-text', 'rgb(255,255,255)'],
    ['action-secondary', 'rgb(140,141,145)'],
    ['action-secondary-text', 'rgb(255,255,255)']
  ]
};
```

3. Import `Qtheme` module

```
-----------------------------------------------
@Below example usage: `your-angular-app/src/app/app.module.ts`

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    QthemeModule.config({
      initTheme: extendedLightTheme,
      themes: [extendedLightTheme, darkTheme] // this is not required 
      // but then you cannot use `setMemoTheme(themeName)`
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

In other modules just use `imports: [..., QthemeModule]`
```

4. Create all css classes for every atomic value
*(probably as global classes)* 
```
Examples CSS:
  ['bg', 'rgb(28,36,48)']) => .bg { background: var(--bg) }
  ['bg-darker', 'rgb(33,33,33)']) => .bg-darker { background: var(--bg-darker) }
  ['action-primary', 'rgb(28,136,254)']) => .btn-primary { background: var(--bg-darker) }
```

5. Add css class to some element
```
Examples of usage HTML:
  <header class="bg-darker"></header>
  <main class="bg"></main>
  <button class="btn-primary"></div>
```

6. Change themes in component/service/directive/pipe/custom
```
-----------------------------------------------
@Below example usage src/app/app.component.ts

class AppComponent {
  constructor(private _theme: QthemeService) {}

  setDark(): void {
    /**
     *  Theme can be changed with name provided in `your-theme.theme.ts` file
     *  Works only if theme is imported in QthemeModule.config,
     *  else returns `WrongThemeNameError`
     */
    this._theme.setMemoTheme('dark');
  }

  setLight(): void {
    /**
     *  Theme can be set with object of type ITheme
     *  eg. import {lightTheme} from `path-to/theming/light.theme.ts` file
     */
    this._theme.setTheme(lightTheme);
  }

}
```

7. Create button dark/light and BUM!

Made by Kacper Walczak

quak.com.pl
