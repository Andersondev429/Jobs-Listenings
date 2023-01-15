import { Component, Input, OnInit } from '@angular/core';
import { Filtros } from './filtro';
export { Filtros };

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  filtros: Filtros = {
    filtro: ['Frontend', 'Senior', 'HTML'],
  };

  constructor() { }

  ngOnInit(): void {
  }

  limparFiltro(){
    this.filtros.filtro.length = 0;
  }

  limparSelecaoPosicao0(){
    this.filtros.filtro.splice(0, 1);
  }

  limparSelecaoPosicao1(){
    this.filtros.filtro.splice(1, 1);
  }

  limparSelecaoPosicao2(){
    this.filtros.filtro.splice(2, 1);
  }
}

