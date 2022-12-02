import { Component, OnInit } from '@angular/core';

/*Importe a o service Title*/
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


/* Injete o service, através do construtor*/
  constructor(private title: Title, private funcao_login:LoginService) { }

  ngOnInit(): void {
    /*aqui Chamo o método setTitle*/
    this.title.setTitle('Crie Sua Conta | Logim ');
  }


//instanciando a classe criadas lá me user
userModel = new User();

                     //subscribe serve para pegar a pega a resposta e tratar ela já o response pega as mensagem de sucesso
  //função            em login.services.ts foi criado o serviço aqui a gente ponha ele pra funcionar
  receberDados ()     //aqui ele pega as informações do Loginservice, vai carregar o formulario e o que vinher de respostar ele vai guardar em response
  {
      this.funcao_login.login(this.userModel).subscribe(Response =>{
        console.log(Response)
      })
  }

}


      //console.log(this.userModel)
      //alert(this.userModel.email)