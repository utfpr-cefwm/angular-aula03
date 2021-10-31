import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'artigaria-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Artigos',
      icon: 'pi pi-home',
      routerLink: [ '/home/lista-artigos' ],
    },
  ];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.router.navigate([ '/login' ]);
  }

}
