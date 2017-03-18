import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavItemComponent} from './navitem.component';
import { AppComponent } from './app.component';
import {NavMenuComponent} from './navmenu.component'

@NgModule({
  declarations: [
    AppComponent, 
    NavItemComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
