import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'artigaria-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css'],
})
export class ArtigoComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    _id: [''],
    titulo: [''],
    descricao: [''],
    imagem: [''],
    url: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const artigoId: number = +params.id;
    });
  }

  public salvar(): void {
    console.log(this.formGroup.value);
  }

}
