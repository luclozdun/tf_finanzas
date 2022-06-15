import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VanCalculationRoutingModule } from './van-calculation-routing.module';
import { MercadoPrincipalComponent } from './components/mercado-principal/mercado-principal.component';
import { MercadoSecundarioComponent } from './components/mercado-secundario/mercado-secundario.component';

@NgModule({
  declarations: [
  
    MercadoPrincipalComponent,
       MercadoSecundarioComponent
  ],
  imports: [
    BrowserModule,
    VanCalculationRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class VanCalculationModule { }
