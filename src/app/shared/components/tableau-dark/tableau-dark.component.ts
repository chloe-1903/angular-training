import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
  // we want to remove shadow dom emulation because projection doesn't allow us to style table body
})
export class TableauDarkComponent implements OnInit {

  @Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
