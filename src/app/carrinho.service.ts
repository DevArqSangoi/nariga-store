import { Injectable } from '@angular/core';
import { ICarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: ICarrinho[] = [];

  constructor() {
    this.itens = this.obterCarrinho() || [];
  }

  obterCarrinho(): ICarrinho[] {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: ICarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  
  removerDoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  
  limparCarrinho() {    
    localStorage.setItem("carrinho", "[]");
  }
}
