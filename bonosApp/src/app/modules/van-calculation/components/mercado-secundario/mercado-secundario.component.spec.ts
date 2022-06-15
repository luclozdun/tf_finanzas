import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoSecundarioComponent } from './mercado-secundario.component';

describe('MercadoSecundarioComponent', () => {
  let component: MercadoSecundarioComponent;
  let fixture: ComponentFixture<MercadoSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoSecundarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
