import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {StepDTO} from '../../models/dto/step';
import {FormBuilderComponent} from '../form-builder/form-builder/form-builder.component';
import {FormWizardService} from '../../services/form-wizard.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @ViewChild(FormBuilderComponent) formBuilderComponent: FormBuilderComponent;
  form: FormGroup;

  constructor(public formWizardSvc: FormWizardService) { }

  ngOnInit() {
    this.formWizardSvc.formElem$.subscribe((form: FormGroup) => {
       this.form = form;
    });

  }
//todo editable
  isFormValid($event) {
    if (!this.form.valid) {
      $event.stopPropagation();
      $event.preventDefault();
    } else {
      return true;
    }
}
}
