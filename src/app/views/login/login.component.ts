import { Component, OnInit } from '@angular/core';

/*Importe a o service Title*/
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userModel: any;
receberDados() {
throw new Error('Method not implemented.');
}

/* Injete o service, através do construtor*/
  constructor(private title: Title) { }

  ngOnInit(): void {
    /*aqui Chamo o método setTitle*/
    this.title.setTitle('Crie Sua Conta | Logim ');
  }

}
