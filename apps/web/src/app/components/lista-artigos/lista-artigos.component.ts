import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listaArtigosService: ListaArtigosService,
  ) {
  }

  ngOnInit(): void {
  }

  public editar(artigo: Artigo): void {
    this.router.navigate([
      '..',
      'editar-artigo',
      artigo.id,
    ], {
      relativeTo: this.activatedRoute,
    });
  }

}
