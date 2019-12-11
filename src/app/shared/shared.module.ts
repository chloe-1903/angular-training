import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  // we don't use TemplatesModule but we export it (like a pipe)
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  exports : [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
