import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable, Subscription } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit, OnDestroy {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  public headers: string[];
  // states is used in template with pipe keyvalue (Angular 6+)
  public states = State;
  // for Angular 5- :
  // public states = Object.values(State);
  public title = 'Prestations';
  public subtitle = 'Toutes les prestations';
  public addBtnLabel = 'Nouvelle prestation';
  public addPrestationPath = 'add';
  // not '/add' because it would give http://localhost:4200/add and not http://localhost:4200/prestations/add
  public action = 'Open pop-in';
  private subscription: Subscription;


  constructor(private ps: PrestationsService) { }

  public changeState(item: Prestation, event) {
    this.ps.update(item, event.target.value).subscribe((response: Prestation) => {
      item.state = response.state;
    });
  }

  public popIn() {
    console.log('generate pop-in with a service');
    // we could use a service displaying a ng-bootstrap pop-in here
  }

  ngOnInit() {
    this.subscription = this.ps.collection.subscribe((col) => {
      this.collection = col;
    });
    this.headers = ['Type', 'Client', 'Nombre de jours', 'Taux journalier HT', 'Total HT', 'Total TTC', 'Statut'];
  }

  ngOnDestroy() {
    // not usefull here, because it's allready in HttpClient (it is an example):
    this.subscription.unsubscribe();
  }

}
