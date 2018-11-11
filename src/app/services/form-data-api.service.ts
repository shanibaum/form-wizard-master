import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataApiService {

  data = [
    // {
    //   'type': 'panel',
    //   'id': 'paymentInformation',
    //   'title': 'Payment information',
    //   'expanded': true,
    //   'controls': [
        {
          'type': 'autocomplete',
          'id': 'P_DEPARTMENT',
          'label': 'Department',
          'value': 'EUR',
          'validations': [
            {name:'Mandatory', arguments: null},
          ]
        },
        {
          'type': 'autocomplete',
          'id': 'P_OFFICE',
          'label': 'Office',
          'value': 'EU1',
          'validations': [
            {name:'Mandatory', arguments: null},
          ]
        },
        {
          'type': 'input',
          'id': 'X_INSTR_ID',
          'label': 'Instruction ID',
          'value': '',
          'validations': [
            {name:'Mandatory', arguments: null},
            {name:'MaxLength', arguments: 35},
          ]
        },
        {
          'type': 'input',
          'id': 'X_END_TO_END_ID',
          'label': 'End to end ID',
          'value': '',
          'validations': [
            {name:'MaxLength', arguments: 35},
          ]
        },
        {
          'type': 'autocomplete',
          'id': 'OX_STTLM_CCY',
          'label': 'Currency',
          'value': '',
          'validations': [
            {name:'Mandatory', arguments: null},
            {name:'ExactLength', arguments: 3},
          ]
        },
        {
          'type': 'autocomplete',
          'id': 'OX_STTLM_AMT',
          'label': 'Amount',
          'value': '',
          'validations': [
            {name:'Mandatory', arguments: null},
            {name:'MaxLength', arguments: 15},
          ]
        },
        {
          'type': 'datepicker',
          'id': 'OX_STTLM_DT_1B',
          'label': 'Value date',
          'value': '',
          'validations': [
            {name:'Mandatory', arguments: null}
          ]
        },
        {
          'type': 'autocomplete',
          'id': 'OX_CHRG_BR',
          'label': 'Charges bearer',
          'value': '',
          // 'api': 'http://localhost:4001/blat',
          'options': [
            {
              'key': 'CRED',
              'value': 'CRED'
            },
            {
              'key': 'DEBT',
              'value': 'DEBT'
            },
            {
              'key': 'SHAR',
              'value': 'SHAR'
            },
            {
              'key': 'SLEV',
              'value': 'SLEV'
            }
          ],
          'validations': [
            {name:'Mandatory', arguments: null},
          ]
        }
  ];

  constructor() {
  }

  getFormData() {
    // TODO api call
    return this.data;
  }

  // getFormLayout() {
  //   // TODO api call
  //   return this.layout;
  // }
}
