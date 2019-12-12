import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public headers: string[];
  public collection$: Observable<Client[]>;
  public states = StateClient;
  public addBtnLabel = 'Nouveau client';
  public addPrestationPath = 'add';

  constructor(private cs: ClientsService, private activatedRoute: ActivatedRoute) { }

  public changeState(item: Client, event) {
    this.cs.update(item, event.target.value).subscribe((response: Client) => {
      item.state = response.state;
    });
  }

  ngOnInit() {
    this.headers = ['Nom', 'Email', 'Statut'];
    this.activatedRoute.data.subscribe((flux) => {
      this.title = flux.title;
      this.subtitle = flux.subtitle;
    });
    this.collection$ = this.cs.collection;
  }

}
