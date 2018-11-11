import { Component , Input , OnChanges , SimpleChanges } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnChanges {
  @Input() controls;
  form;
  @Input() innerForm = false;
  @Input() customFormService = undefined;
  @Input() formName: string;

  ngOnChanges(changes: SimpleChanges) { // TODO MOVE TO ONINIT ON DEPLOY
    if (this.innerForm) {
      this.buildInnerForm();
    } else if (this.controls) {
      this.buildMainForm();
    }
  }

  private buildInnerForm() {
    for (const control of this.controls) {
      this.form.addControl(control.id, new FormControl(control.value || ''));
    }
  }

  private buildMainForm() {
    const controls = {};

    for (const control of this.controls) {
      controls[control.id] = new FormControl(control.value || '');
    }

    this.form = new FormGroup(controls);
  }
}
