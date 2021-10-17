import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArtigosComponent } from './lista-artigos.component';

describe('ListaArtigosComponent', () => {
  let component: ListaArtigosComponent;
  let fixture: ComponentFixture<ListaArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArtigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
