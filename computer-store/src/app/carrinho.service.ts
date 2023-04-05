import { Injectable } from '@angular/core';
import { NotificacaoService } from './notificacao.service';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor(
    private notificacao : NotificacaoService
  ) { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removeItem( produtoId:number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    this.notificacao.notificar("O produto foi removido ao carrinho!")
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
