import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { ICarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ICarrinho[] = [];
  totalCarrinho = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    public notificacaoService: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calculaTotal();
  }

  localRemoveCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerDoCarrinho(produtoId);
    this.calculaTotal();
  }

  calculaTotal() {
    this.totalCarrinho = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  finalizaCompra() {
    this.itensCarrinho = [];
    this.carrinhoService.limparCarrinho();
    this.notificacaoService.notificar("Sua compra foi finalizada com sucesso!")    ;
    this.router.navigate(["produtos"]);
  }
}
