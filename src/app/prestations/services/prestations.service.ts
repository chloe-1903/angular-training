import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Prestation } from 'src/app/shared/models/prestation';
import { map } from 'rxjs/operators';

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
}
