import { Component, OnInit } from '@angular/core';
import {FormsWizardDTO} from '../../models/dto/forms-wizard';
import {FormWizardService} from '../../services/form-wizard.service';
import {StepDTO} from '../../models/dto/step';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit {

  formsWizard: FormsWizardDTO;

  constructor(protected formWizardService: FormWizardService) {
    this.formWizardService.getWizard().subscribe(data => {
      this.formsWizard = new FormsWizardDTO(data);
      console.log( this.formsWizard );
    });
  }

  ngOnInit(): void {

  }


}
