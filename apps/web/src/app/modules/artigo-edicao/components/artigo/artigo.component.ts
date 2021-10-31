import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subject } from 'rxjs';
import {
  take,
  takeUntil,
} from 'rxjs/operators';

import { Artigo, IArtigo } from '@artigaria/common';

import { ArtigoEdicaoService } from '../../services/artigo-edicao/artigo-edicao.service';
import { ModifyResult } from 'mongodb';

@Component({
  selector: 'artigaria-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css'],
})
export class ArtigoComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup = this.formBuilder.group({
    _id: [''],
    titulo: [''],
    descricao: [''],
    imagem: [''],
    url: [''],
  });

  private subUnsubscribe: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private artigoEdicaoService: ArtigoEdicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.subUnsubscribe),
    ).subscribe((params: Params) => {
      const artigoId: number = +params.id;
      this.artigoEdicaoService.get(artigoId).pipe(
        take(1),
      ).subscribe((artigo: Artigo) => {
        this.formGroup.setValue(artigo.asJson());
      });
    });
  }

  ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  public salvar(): void {
    const iArtigo: IArtigo = this.formGroup.value;
    this.artigoEdicaoService.put(iArtigo).subscribe(
      (results: ModifyResult<IArtigo>) => {
        if (results.ok) {
          this.router.navigate(['/']);
        }
      },
    );
  }

}
