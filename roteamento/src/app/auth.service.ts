import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Em uma aplicação real, esse token vem de uma requisição ao backEnd
  acesstoken = "OHjcWdaFE35A7kBJBmVyjlNfaJ8lWgHI2zaUR4tjGhI=";

  constructor() { }

  estaAutenticado() : Boolean {
    //Onde sero armazenados as informações de sessão (localStorage ou sessionStorage)
    // Um usuário é identificado através de um token, todas as informações do usuario
    //O acess token vem do backEnd
    return !!sessionStorage.getItem("acess-token");

  }

  login(email: String, senha: String): Boolean {
    if(email==="admin@admin.com.br" && senha ==="123456"){
      sessionStorage.setItem("acess-token", this.acesstoken);
      //Nesse caso vamos apenas retornar para a função que chamou que o login deu certo
      return true;
    }
    return false;
  }

  logout(){
    //Precisar apenas limpoar o sessionStorage
    sessionStorage.clear;
  }
}
