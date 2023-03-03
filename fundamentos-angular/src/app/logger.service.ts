import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  mensagens : string[] = [];

  logar(mensagem:string) { 
    alert(mensagem);
    this.mensagens.push(mensagem);
  }

  exibeTodosOsLogs(){
    console.log(this.mensagens);
  }
}
