import {Injectable} from '@angular/core';
import {AbstractControl, Validators} from '@angular/forms';
import {isNullOrUndefined} from 'util';
import * as moment from 'moment';
// import {FormatService} from '../../../modules/ui/services/format.service';

// const formatService = new FormatService();

@Injectable()
export class FormValidatorsService {

  static setValidators(validations, control) {
    if (validations == null) {
      return;
    }

    const validatorsArr = [];
    for (let i = 0; i < validations.length; i++) {
      if (typeof this[validations[i].name] === 'function') {
        validatorsArr.push(this[validations[i].name](validations[i].arguments));
      }
    }

    control.setValidators(Validators.compose(validatorsArr));
  }

  public static addValidator(validator, controller, validations) {
    if (validations == null) {
      validations = [];
    }

    let validatorObj = {};
    if (typeof validator === 'string') {
      validatorObj['name'] = validator;
    } else if (typeof validator === 'object') {
      validatorObj = validator;
    }

    validations.push(validatorObj);
    FormValidatorsService.setValidators(validations, controller);
  }

  public static removeValidator(validator, controller, validations) {
    if (validations == null) {
      return;
    }

    for (let i = 0 ; i < validations.length ; i++) {
      if (validations[i] != null && validations[i].name != null && validations[i].name === validator) {
        validations.splice(i, 1);
        FormValidatorsService.setValidators(validations, controller);
      }
    }
  }

  // All function below will be called dynamically from getValidators

  public static MaxLength(length) {
    return (control: AbstractControl) => {

      if (control.value == null || control.value.length === 0) { // empty value is allowed
        return null;
      }
      if (control.value != null && control.value.length != null && control.value.length <= parseInt(length)) {
        return null;
      }
      return {MaxLength: true};
    };
  }

  public static ExactLength(length) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { // empty value is allowed
        return null;
      }
      if (control.value != null && control.value.length != null && control.value.length === parseInt(length)) {
        return null;
      }
      return {ExactLength: true};
    };
  }

  public static MultiFieldMaxLength(value) {
      return (control: AbstractControl) => {
          if (control.value != null && control.value.length > 0 && value != null) {
              const keys = Object.keys(control.value[0]);
              for (let i = 0; i < control.value.length; i++) {
                  if (control.value[i][keys[0]].length > 0 && control.value[i][keys[0]].length < value[keys[0]]) {
                      return {MultiFieldMaxLength: [i, keys[0]]};
                  }
                  if (control.value[i][keys[1]].length > 0 && control.value[i][keys[1]].length < value[keys[1]]) {
                      return {MultiFieldMaxLength: [i, keys[1]]};
                  }
              }
          }
          return null;
      };
  }

  public static MultiFieldExactLength(value) {
      return (control: AbstractControl) => {
          if (control.value != null && control.value.length > 0 && value != null) {
              const keys = Object.keys(control.value[0]);
              for (let i = 0; i < control.value.length; i++) {
                  if (control.value[i][keys[0]].length > 0 && control.value[i][keys[0]].length !== value[keys[0]]) {
                      return {MultiFieldExactLength: [i, keys[0]]};
                  }
                  if (control.value[i][keys[1]].length > 0 && control.value[i][keys[1]].length !== value[keys[1]]) {
                      return {MultiFieldExactLength: [i, keys[1]]};
                  }
              }
          }
          return null;
      };
  }

  public static BICLength() {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (control.value != null && (control.value.length === 8 || control.value.length === 11)) {
        return null;
      }
      return {BICLength: true};
    };
  }

  // public static CommaPresence() {
  //   return (control: AbstractControl) => {
  //     if (control.value == null || control.value.length === 0) { //empty value is allowed
  //       return null;
  //     }
  //     if (!isNullOrUndefined(control.value)) {
  //       if (control.value.toString().indexOf(formatService.format.number.decimalSeparator) === -1) {
  //         return {CommaPresence: true};
  //       }
  //     }
  //     return null;
  //   };
  // }

  // public static MinLengthIntegerPartInDecimal(length) {
  //   return (control: AbstractControl) => {
  //     if (control.value == null || control.value.length === 0) { //empty value is allowed
  //       return null;
  //     }
  //     if (!isNullOrUndefined(control.value)) {
  //       const value = control.value.toString();
  //       const decimalSeparatorIdx = value.indexOf(formatService.format.number.decimalSeparator);
  //       let digitsBeforeDecimalSeparatorCount;
  //
  //       if (decimalSeparatorIdx === -1) {
  //         digitsBeforeDecimalSeparatorCount = value.length;
  //       } else {
  //         digitsBeforeDecimalSeparatorCount = value.substr(0, decimalSeparatorIdx).length;
  //       }
  //
  //       if (digitsBeforeDecimalSeparatorCount < length[0]) {
  //         return {MinLengthIntegerPartInDecimal: true};
  //       }
  //     }
  //
  //     return null;
  //   };
  // }

  // public static NumberOfDigitsAfterPrecision(precision) {
  //   return (control: AbstractControl) => {
  //     if (control.value == null || control.value.length === 0) { //empty value is allowed
  //       return null;
  //     }
  //     if (!isNullOrUndefined(control.value)) {
  //       const value = control.value.toString();
  //       const precisionIdx = value.indexOf(formatService.format.number.decimalSeparator);
  //       if (precisionIdx === -1) {
  //         return {NumberOfDigitsAfterPrecision: true};
  //       }
  //       const digitsAfterPrecisionCount = control.value.toString().substr(precisionIdx + 1).length;
  //       if (digitsAfterPrecisionCount !== parseInt(precision[0])) {
  //         return {NumberOfDigitsAfterPrecision: true};
  //       }
  //     }
  //     return null;
  //   };
  // }

  public static StartsWith(beginChars) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (!isNullOrUndefined(control.value)) {
        const pattern = '^' + beginChars[0];
        if (control.value.toString().match(pattern) === null) {
          return {StartsWith: true};
        }
      }
      return null;
    };
  }

  public static MustNotStartWith(beginChars) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (!isNullOrUndefined(control.value)) {
        const pattern = '^' + beginChars[0];
        if (control.value.toString().match(pattern) != null) {
          return {MustNotStartWith: true};
        }
      }
      return null;
    };
  }

  public static MustNotEndWith(endChars) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (!isNullOrUndefined(control.value)) {
        const pattern = endChars[0] + '$';
        if (control.value.toString().match(pattern) != null) {
          return {MustNotEndWith: true};
        }
      }
      return null;
    };
  }

  public static CharNotAllowed(chars) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (!isNullOrUndefined(control.value) && control.value.indexOf(chars[0]) > -1) {
        return {CharNotAllowed: true};
      }
      return null;
    };
  }

  public static Mandatory() {
    return (control: AbstractControl) => {
      if (control.value == null || (typeof control.value === 'string' && control.value.trim() === '')) {
        return {Mandatory: true};
      }
      return null;
    };
  }

  public static ValuesNotAllowed(values: string[]) {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (!isNullOrUndefined(control.value)) {
        values.map(value => {
          if (control.value.toString().indexOf(value) > -1) {
            return {ValuesNotAllowed: true};
          }
        });
      }
      return null;
    };
  }

  //validation for dh-select-simple component only
  public static InStaticList(values: {staticList: any[]}) {
    if (isNullOrUndefined(values) ||  isNullOrUndefined(values.staticList)) {
      return null;
    }
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      const valueInList = FormValidatorsService.checkIfValueInList(control.value, values.staticList);
      if (!valueInList) {
        return {InStaticList: true};
      }
      return null;
    };
  }

  //validation for dh-select-simple component only
  public static MultiFieldInStaticList(values: {staticList: any[]}) {
    if (isNullOrUndefined(values) ||  isNullOrUndefined(values.staticList)) {
      return null;
    }
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      const valueInList = FormValidatorsService.checkIfValueInList(control.value, values.staticList);
      if (!valueInList) {
        return {MultiFieldInStaticList: true};
      }
      return null;
    };
  }

  private static checkIfValueInList(value, list) {
    let valueInList = false;
    for (const elem of list) {
      if (!isNullOrUndefined(elem.id) && elem.id === value) {
        valueInList = true;
        break;
      }
    }
    return valueInList;
  }

  // Not Used
  public static DigitsOnly() {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      if (isNaN(control.value)) {
        return {DigitsOnly: true};
      }
      return null;
    };
  }

  public static sightVerification() {
    return () => {
      return {sightVerification: true};
    };
  }

  public static clickVerification() {
    return () => {
      return {clickVerification: true};
    };
  }

  public static rekeyVerification() {
    let origValue;
    let isFirstVerification = true;
    return (control: AbstractControl) => {
      if (isFirstVerification) {
        origValue = control.value;
        isFirstVerification = false;
      }

      if (control.value instanceof moment) {
        if (control.value.unix() !== origValue.unix() || !control.touched) {
          return {rekeyVerification: true};
        }
      } else if (control.value !== origValue || !control.touched) {
        return {rekeyVerification: true};
      }

      return null;
    };
  }

  public static blindVerification() {
    let origValue;
    let isFirstVerification = true;
    return (control: AbstractControl) => {
      if (isFirstVerification) {
        origValue = control.value;
        isFirstVerification = false;
      }

      if (control.value instanceof moment) {
        if (control.value.unix() !== origValue.unix() || !control.touched) {
          return {rekeyVerification: true};
        }
      } else if (control.value !== origValue || !control.touched) {
        return {rekeyVerification: true};
      }

      return null;
    };
  }

  public static slashValidator() {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      const pattern = '(^/|//)|/$';
      if (control.value.match(pattern) !== null) {
        return {slashValidator: true};
      }
      return null;
    };
  }

  public static identifierCodeValidator() {
    return (control: AbstractControl) => {
      if (control.value == null || control.value.length === 0) { //empty value is allowed
        return null;
      }
      const pattern = '^//';
      if (control.value.match(pattern) !== null) {
        return null;
      }
      return {identifierCodeValidator: true};
    };
  }
}
