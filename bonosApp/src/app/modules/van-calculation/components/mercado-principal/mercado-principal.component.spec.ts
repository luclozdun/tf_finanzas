import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoPrincipalComponent } from './mercado-principal.component';

describe('MercadoPrincipalComponent', () => {
  let component: MercadoPrincipalComponent;
  let fixture: ComponentFixture<MercadoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
