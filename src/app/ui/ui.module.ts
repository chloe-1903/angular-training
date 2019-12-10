import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoderbaseUiModule} from '@coderbase/ui';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiComponent } from './components/ui/ui.component';



@NgModule({
  declarations: [NavComponent, HeaderComponent, FooterComponent, UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }
