import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Config} from '../../../config/config';
import {FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormWizardService {

  form$ = new BehaviorSubject<FormGroup>(null);

  constructor(private http: HttpClient) { }

  public getWizard(): Observable<any> {
    return this.http.get(Config.formWizardApiUrl);
  }

  submit(formList): Observable<any> {
    const arr  = [];
    formList.forEach(function(form) {
      arr.push({'fields': form.fields.getRawValue(), 'tableName': form.table_name});
    });
    return this.http.post(Config.formsSubmitUrl, JSON.stringify(arr) );
  }
}
