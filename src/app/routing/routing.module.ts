import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../views/home/home.component';
import {LoginComponent} from '../views/login/login.component';

/*AQUI FAZEMOS OS APONTAMENTOS DE ROTAS*/





const rota1: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent}







]
/*configurando a rota 0 que vai ser a home quando digitar apeas o dominio vai pra home*/



@NgModule({
  imports: [RouterModule.forRoot(rota1)],

  exports:[RouterModule]
  
})
export class RoutingModule { }
