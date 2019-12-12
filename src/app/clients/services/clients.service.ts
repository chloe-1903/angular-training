import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private collection$: Observable<any>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // calls setter
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      // transform JSON into table of clients
      map((table) => {
        return table.map((item) => {
          return new Client(item);
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

  public update(client: Client, state: StateClient): Observable<any> {
    const obj = {...client}; // destructuring to avoid modifying client.state
    obj.state = state;
    return this.http.patch(`${this.urlApi}clients/${obj.id}`, obj);
  }
}
