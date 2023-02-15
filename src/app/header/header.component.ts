import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  produtos: string | any[] | null | undefined;

  constructor(
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    
  }

}
