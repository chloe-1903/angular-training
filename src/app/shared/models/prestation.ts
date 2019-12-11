import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI{
  id: number;  typePresta: string;
  nbJours = 1;
  tva = 20;
  tjmht = 1500;
  client: string;
  state = State.OPTION;

  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
    return this.tjmht * this.nbJours;
  }

  totalTtc(val?: number): number {
    return this.totalHt() * (1 + this.tva / 100);
  }

}
