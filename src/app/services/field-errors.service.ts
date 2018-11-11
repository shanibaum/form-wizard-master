export class FieldErrorsService {
  public static getErrorText(errorsObj, controlValidations) {
    const errorName = FieldErrorsService.getErrorByPriority(errorsObj);
    const errorArgs = FieldErrorsService.getArgumentsForError(errorName, controlValidations);

    if (typeof FieldErrorsService[errorName] === 'function') {
      return FieldErrorsService[errorName](errorArgs);
    } else {
      return null;
    }
  }

  private static getErrorByPriority(errors) {
    //TODO RETURN THE FIRST PRIORITY
    const errorsArray = Object.keys(errors);
    return errorsArray[0];
  }

  private static getArgumentsForError(errorName, validations) {
    for (let i = 0 ; i < validations.length ; i++) {
      if (validations[i].name === errorName) {
        return validations[i].arguments;
      }
    }
  }

  private static Mandatory(args?) {
    return 'field is mandatory';
  }

  private static ExactLength(args?) {
    return 'field must be ' + args + ' characters';
  }
}
