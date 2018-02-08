import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { sidenavComponent } from './sidenav/app.sidenavComponent';


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
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: '',
        component: contentAreaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
