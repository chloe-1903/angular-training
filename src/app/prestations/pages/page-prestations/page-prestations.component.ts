import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  public headers: string[];
  // states is used in template with pipe keyvalue (Angular 6+)
  public states = State;
  // for Angular 5- :
  // public states = Object.values(State);
  public title = 'Prestations';
  public subtitle = 'Toutes les prestations';

  constructor(private ps: PrestationsService) { }

  public changeState(item: Prestation, event) {
    this.ps.update(item, event.target.value).subscribe((response: Prestation) => {
      item.state = response.state;
    });
  }

  ngOnInit() {
    this.ps.collection.subscribe((col) => {
      this.collection = col;
    });
    this.headers = ['Type', 'Client', 'Nombre de jours', 'Taux journalier HT', 'Total HT', 'Total TTC', 'Statut'];
  }

}
