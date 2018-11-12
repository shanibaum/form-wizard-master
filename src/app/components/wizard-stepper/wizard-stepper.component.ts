import { Component , Input , OnChanges , OnInit , SimpleChanges  } from '@angular/core';
import { FormsWizardDTO } from '../../models/dto/forms-wizard';
import { StepDTO } from '../../models/dto/step';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.css']
})
export class WizardStepperComponent implements OnInit, OnChanges {

  @Input() formsWizard: FormsWizardDTO;
  steps: StepDTO[];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes['formsWizard'].currentValue) {
     const formsWizard = changes['formsWizard'].currentValue;
     this.steps = formsWizard.wizardData.steps;
   }
  }
  //todo
  isFormValid(formId) {
    // return this.formElement.nativeElement.valid;
  }
}
