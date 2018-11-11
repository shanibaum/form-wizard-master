import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Config} from '../../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormWizardService {

  constructor(private http: HttpClient) { }

  public getWizard(): Observable<any> {
    return this.http.get(Config.formWizardApiUrl);
  }

}
