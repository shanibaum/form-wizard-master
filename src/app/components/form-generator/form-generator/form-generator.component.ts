import { Component , Input } from '@angular/core';
import { StepDTO } from '../../../models/dto/step';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent  {
  layout;
  @Input() step: StepDTO;
  @Input() formName: string;
  @Input() fields; // todo typing
  @Input() formId: string;

  constructor() {
  }

}
