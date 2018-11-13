import { Component , Input , OnChanges , OnInit , SimpleChanges } from '@angular/core';
import {FormWizardService} from '../../../services/form-wizard.service';

@Component({
  selector: 'app-control-builder',
  templateUrl: './control-builder.component.html',
  styleUrls: ['./control-builder.component.scss']
})
export class ControlBuilderComponent implements OnInit, OnChanges {
  data = {};
  @Input() control;
  @Input() layout;
  @Input() form;

  constructor(public formWizardSvc: FormWizardService) { }

  ngOnInit() {
    // this.data = {'data': this.control};
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if (changes['control'].currentValue) {
      this.data = {'data': this.control};
    }
    this.formWizardSvc.formElem$.next(this.form);
  }
}
