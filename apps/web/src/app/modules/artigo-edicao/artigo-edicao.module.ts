import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoComponent } from './components/artigo/artigo.component';


@NgModule({
  declarations: [
    ArtigoComponent,
  ],
  imports: [
    CommonModule,
    ArtigoEdicaoRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    ArtigoComponent,
  ],
})
export class ArtigoEdicaoModule {
}
