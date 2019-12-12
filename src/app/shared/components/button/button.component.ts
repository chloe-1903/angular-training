import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() route: string; // internal redirections
  @Input() href: string; // external
  // note : we use either route OR href, not both at the same time

  constructor() { }

  ngOnInit() {
  }

}
