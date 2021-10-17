import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { ArtigoComponent } from './components/artigo/artigo.component';

const routes: Routes = [
  {
    path: ':id',
    component: ArtigoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ArtigoEdicaoRoutingModule {
}
