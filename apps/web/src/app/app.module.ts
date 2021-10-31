import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaArtigosComponent } from './components/lista-artigos/lista-artigos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaArtigosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3333/api',
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
