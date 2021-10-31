import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { SrcDebounceDirective } from './directives/src-debounce/src-debounce.directive';


@NgModule({
  declarations: [
    ArtigoComponent,
    SrcDebounceDirective,
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
    SrcDebounceDirective,
  ],
})
export class ArtigoEdicaoModule {
}
