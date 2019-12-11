import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
  // we want to remove shadow dom emulation because projection doesn't allow us to style table body
})
export class TableauLightComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
