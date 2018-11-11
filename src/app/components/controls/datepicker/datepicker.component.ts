import {ChangeDetectionStrategy, Component, ElementRef, Injectable, OnInit, Renderer2} from '@angular/core';
import {AbstractTextControlComponent} from '../abstract-text-control/abstract-text-control.component';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import * as _moment from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import {FormatService} from '../../../services/format.service';
const moment = _moment;
const formatServiceForAdapter = new FormatService();


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


/**
 * Custom date adapter
 */
@Injectable()
export class AppDateAdapter extends MomentDateAdapter {
  /**
   * handles the displayed value - it converts it according to the date format of the user
   * @param {moment.Moment} date
   * @param {Object} displayFormat
   * @returns {string}
   */
  format(date: Moment, displayFormat: Object): string {
    return moment(date).format(formatServiceForAdapter.format.dateFormat.toUpperCase());
  }

  /**
   * handles the validation of the value, it has a strict format validation
   * @param value
   * @param {string | string[]} parseFormat
   * @returns {moment.Moment}
   */
  parse(value: any, parseFormat: string | string[]) {
    return moment(value, formatServiceForAdapter.format.dateFormat.toUpperCase(), true);
  }
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class DatepickerComponent extends AbstractTextControlComponent implements OnInit {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
    this.control['format'] = 'DD/MM/YYYY'
  }
}
