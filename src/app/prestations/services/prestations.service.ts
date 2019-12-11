import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Prestation } from 'src/app/shared/models/prestation';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private collection$: Observable<any>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // calls setter
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      // transform JSON into table of prestations
      map((table) => {
        return table.map((item) => {
          return new Prestation(item);
        });
      })
    );
  }

  public get collection(): Observable<any> {
    return this.collection$;
  }

  public set collection(col: Observable<any>) {
    this.collection$ = col;
  }

  public update(prestation: Prestation, state: State): Observable<any> {
    const obj = {...prestation}; // destructuring to avoid modifying prestation.state
    obj.state = state;
    return this.http.patch(`${this.urlApi}prestations/${obj.id}`, obj);
  }
}
