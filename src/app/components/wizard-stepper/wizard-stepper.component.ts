import { Component , Input , OnChanges , OnInit , SimpleChanges , ViewChild } from '@angular/core';
import { FormsWizardDTO } from '../../models/dto/forms-wizard';
import { StepDTO } from '../../models/dto/step';
import { FormGroup } from '@angular/forms';
import { FormWizardService } from '../../services/form-wizard.service';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.scss']
})
export class WizardStepperComponent implements OnInit, OnChanges {

  @Input() formsWizard: FormsWizardDTO;
  steps: StepDTO[];
  formsList: FormGroup[] = new Array();
  @ViewChild('stepper') stepper;

  constructor(public formWizardSvc: FormWizardService) { }

  ngOnInit() {
    this.formWizardSvc.form$.subscribe((form: FormGroup) => {
      if (form) {
        this.formsList.push(form) ;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes['formsWizard'].currentValue) {
     const formsWizard = changes['formsWizard'].currentValue;
     this.steps = formsWizard.wizardData.steps;
   }
  }

  notifyIsFormValid(isValid) {
    if (this.steps[this.stepper.selectedIndex + 1]) {
      this.steps[this.stepper.selectedIndex + 1].stepType.completed = isValid;
    }
  }

  notifyWizardSubmitted(obj) {
    this.formWizardSvc.submit(this.formsList).subscribe(function ( res ) {

    }, err => {

    });
  }

}
