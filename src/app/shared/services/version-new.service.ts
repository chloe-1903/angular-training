import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionNewService {
  public version$: BehaviorSubject<number> = new BehaviorSubject(1);
  public versionTable$: BehaviorSubject<number[]> = new BehaviorSubject([1]);

  constructor() { }

  public increaseVersion() {
    this.version$.next(this.version$.value + 1);
    this.versionTable$.next([...this.versionTable$.value, 1]);
  }
}
