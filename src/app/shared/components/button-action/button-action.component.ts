import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
// not this eventEmiter :
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {
  @Input() label: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public clicked() {
    this.buttonClicked.emit();
  }

  ngOnInit() {
  }

}
