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
    filtro: ['text', 'text1', 'text2'],
  };

  constructor() { }

  ngOnInit(): void {
  }
}

