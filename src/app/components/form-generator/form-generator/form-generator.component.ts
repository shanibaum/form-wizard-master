import { Component , EventEmitter , Input , OnChanges , OnDestroy , Output , SimpleChanges } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormDataApiService} from '../../../services/form-data-api.service';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent  {
  layout;
  @Input() formName: string;
  @Input() fields; // todo typing
  @Input() formId: string;

  constructor() {
  }

}
