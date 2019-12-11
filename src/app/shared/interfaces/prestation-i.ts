import { State } from '../enums/state.enum';

export interface PrestationI {
  id: number;
  typePresta: string;
  nbJours: number;
  tva: number;
  tjmht: number;
  client: string;
  state: State;

  totalHt(): number;
  totalTtc(): number;
}
