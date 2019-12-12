import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
