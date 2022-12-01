import { Component, OnInit } from '@angular/core';

/*Importe a o service Title*/
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


/* Injete o service, através do construtor*/
  constructor(private title: Title) { }

  ngOnInit(): void {
    /*aqui Chamo o método setTitle*/
    this.title.setTitle('Crie Sua Conta | Logim ');
  }


//instanciando a classe criadas lá me user
userModel = new User();


  //função
  receberDados ()
  {
      console.log(this.userModel)
      alert(this.userModel.email)
  }

}
