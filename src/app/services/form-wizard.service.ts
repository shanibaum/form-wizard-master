import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Config} from '../../../config/config';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormWizardService {

  formElem$ = new BehaviorSubject<FormGroup>(null);

  constructor(private http: HttpClient) { }

  public getWizard(): Observable<any> {
    return this.http.get(Config.formWizardApiUrl);
  }

}
