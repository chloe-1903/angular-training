import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  // binding to the attribute 'class' of the host element (td here)
  @HostBinding('class') hostClass: any;

  constructor() {}

  private formatClass(state): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

  ngOnChanges() {
    this.hostClass = this.formatClass(this.appState);
  }

}
