import { Component , EventEmitter , Input , OnChanges , OnInit , Output , SimpleChanges , ViewChild } from '@angular/core';
import {StepDTO} from '../../models/dto/step';
import {FormBuilderComponent} from '../form-builder/form-builder/form-builder.component';
import { FormControl , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @Input() isLastStep: boolean;
  @Input() form: FormGroup;
  @ViewChild(FormBuilderComponent) formBuilderComponent: FormBuilderComponent;
  @Output()  IsFormValid: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output()  wizardSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.isLastStep = false;
  }

  ngOnInit() {
  }

  isFormValid() {
    this.step.stepType.completed  = this.form.valid;
    this.IsFormValid.emit(this.form.valid);
    if (!this.form.valid) {
    if (this.form.invalid) {
      this.markAllAsTouched(this.form);
    }
}
  submit() {
    this.wizardSubmitted.emit(true);
  }

  private markAllAsTouched(group: FormGroup ) {
    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        if (control.invalid && control.errors['Mandatory']) {
          control.markAsTouched({ onlySelf: true });
          control.markAsDirty({ onlySelf: true });
          control.updateValueAndValidity({ onlySelf: true });
        }
      } else if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
}
