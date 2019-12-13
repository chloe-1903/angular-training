import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public form: FormGroup;
  @Input() init = new Prestation(); // this is default value, it will be overwritten on the ngOnInit
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      tjmht: [this.init.tjmht],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(2)]) // use compose() when several validators are needed
      ],
      state:  [this.init.state]
    });
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }

  ngOnInit() {
    this.createForm();
    /*this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });*/
  }

}
