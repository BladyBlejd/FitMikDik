import { Component } from '@angular/core';

import { headerComponent } from './header/app.headerComponent'
import { navComponent } from './nav/app.navComponent'
import { contentAreaComponent } from './contentArea/app.contentAreaComponent'
import { footerComponent } from './footer/app.footerComponent'
import { aboutComponent } from './about/app.aboutComponent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FitMikDik';
}
