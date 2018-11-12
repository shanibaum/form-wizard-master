import { Component , Input , OnChanges , OnDestroy , SimpleChanges } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormDataApiService} from '../../../services/form-data-api.service';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnDestroy, OnChanges {
  form;
  layout;
  dataSubscription;
  @Input() formName: string;
  @Input() fields; // todo typing
  @Input() formId: string;

  constructor() {
  }
  ngOnChanges( changes: SimpleChanges ): void {
    if (changes['fields'].currentValue) {
      this.form = new FormGroup({
        fields: new FormControl(JSON.stringify(this.fields, null, 2)),
      });

      this.dataSubscription = this.form.valueChanges.subscribe((update) => {
        try {
          this.fields = JSON.parse(update.fields);
        } catch (e) {}
      });
    }
  }

  ngOnDestroy() {
    this.dataSubscription();
  }

  getForm(){
    // return this.form;
  }

}
