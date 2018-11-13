import {AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StepDTO} from '../../models/dto/step';
import { FormGeneratorComponent } from '../form-generator/form-generator/form-generator.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @ViewChild('formGenerator') formGenerator: FormGeneratorComponent;

  constructor() { }

  ngOnInit() {
  }

  isFormValid() {
   return this.formGenerator.form ? this.formGenerator.form.valid : false;
  }
}
