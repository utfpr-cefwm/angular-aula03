import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  public salvar(): void {
    console.log(this.formGroup.value);
  }

}
