import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { sidenavComponent} from './sidenav/app.sidenavComponent';



@NgModule({
  declarations: [
    AppComponent, 
    headerComponent, 
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    sidenavComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: '',
        component: contentAreaComponent
      }
    ]),
    MatMenuModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
