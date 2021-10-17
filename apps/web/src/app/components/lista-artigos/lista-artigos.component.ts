import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Artigo } from '@artigaria/common';

import { ListaArtigosService } from '../../services/lista-artigos/lista-artigos.service';

@Component({
  selector: 'artigaria-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css'],
})
export class ListaArtigosComponent implements OnInit {

  public artigos$: Observable<Artigo[]> = this.listaArtigosService.getAll();

  constructor(
    private listaArtigosService: ListaArtigosService,
  ) {
  }

  ngOnInit(): void {
  }

}
