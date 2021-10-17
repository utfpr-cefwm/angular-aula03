import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoComponent } from './components/artigo/artigo.component';


@NgModule({
  declarations: [
    ArtigoComponent,
  ],
  imports: [
    CommonModule,
    ArtigoEdicaoRoutingModule,
  ],
  exports: [
    ArtigoComponent,
  ],
})
export class ArtigoEdicaoModule {
}
