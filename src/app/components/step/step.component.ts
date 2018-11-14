import { Component , EventEmitter , Input , OnInit , Output , ViewChild } from '@angular/core';
import {StepDTO} from '../../models/dto/step';
import {FormBuilderComponent} from '../form-builder/form-builder/form-builder.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @Input() form: FormGroup;
  @ViewChild(FormBuilderComponent) formBuilderComponent: FormBuilderComponent;
  @Output()  IsFormValid: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  isFormValid($event) {
    this.step.stepType.completed  = this.form.valid;
    this.IsFormValid.emit(this.form.valid);
}
}
