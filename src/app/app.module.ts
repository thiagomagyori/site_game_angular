import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import {RoutingModule} from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; /*aqui importa o modulo criado routing*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule /*importando a class*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
