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
  //todo
  submit(formList: FormGroup[]): Observable<any> {
    return this.http.post('http://localhost:4200/aaa', formList);
  }
}
