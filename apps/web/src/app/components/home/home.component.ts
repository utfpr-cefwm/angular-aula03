import {
  Component,
  OnInit,
} from '@angular/core';

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
  ) {
  }

  ngOnInit(): void {
  }

}
