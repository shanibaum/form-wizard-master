import {FormsWizardDTO} from './dto/forms-wizard';

declare let _: any;

export class WizardFactory {

  public static create(attributes: object) {
    if (_.isEmpty(attributes) || _.isEmpty(attributes['entity_type'])) {
      // todo
    }
    switch (attributes['wizardType']) {
      case 'multiple-form':
        return new FormsWizardDTO(attributes);
      case 'single-form':
        // return new singleFormWizardDTO(attributes);
    }
  }

}
