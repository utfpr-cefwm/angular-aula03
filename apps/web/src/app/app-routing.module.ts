import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListaArtigosComponent } from './components/lista-artigos/lista-artigos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/lista-artigos',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-artigos',
      },
      {
        path: 'lista-artigos',
        component: ListaArtigosComponent,
      },
      {
        path: 'editar-artigo',
        loadChildren: () => import(
          './modules/artigo-edicao/artigo-edicao.module'
        ).then(mod => mod.ArtigoEdicaoModule),
      }
    ],
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
