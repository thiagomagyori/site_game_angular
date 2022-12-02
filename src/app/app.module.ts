import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //importa o modulo http para poder usar, esse cliente http vai fazer a ponte entre o site e o json serve auth

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import {RoutingModule} from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './views/header/header.component'; /*aqui importa o modulo criado routing*/
import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule, /*importando a class*/
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
