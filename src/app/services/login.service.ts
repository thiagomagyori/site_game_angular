import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //trazendo o protocologo http
  constructor(private httpClient:HttpClient) { }

  //apontando o caminho do servidor json serve auth
  url = "http://localhost:3000/login"



//pegar tudo de User e jogar a variavel usuario após isso pegar o retorno que é o resultado no caso o retorno com os dados
// e preparar ele para mandar pro back end fazendo a conversão de dados para Json e jogar para o back end
  login(dados_input: User): Observable<any>
  {
    return this.httpClient.post(this.url,JSON.stringify(dados_input), //convertemos os dados para json com json.stringfy
    {
        headers: new HttpHeaders({'Content-Type':'application/json'}),  //falamos o tipo

        observe: "response" //aqui pega a resposta após a acão pode ser um erro por ex
    })
 }
}

