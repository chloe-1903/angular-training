import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

@NgModule({
  declarations: [PageClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
