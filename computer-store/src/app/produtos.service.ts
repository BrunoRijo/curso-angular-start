import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  produto : IProduto | undefined;

  constructor() {}

  getAll(){
    return this.produtos;
  }

  getOne(produtoId : number){
    //return this.produtos.find(produto => produto.id = produtoId);
    this.produto = produtos.find(produto => produto.id = produtoId);
    return this.produto;
  }
}
