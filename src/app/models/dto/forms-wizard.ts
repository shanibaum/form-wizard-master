import {IFormsWizard} from '../../interfaces/IFormsWizard';
import {StepsDTO} from './steps';
import { WizardNameDTO  } from './wizard-name';

declare let _: any;

export class FormsWizardDTO implements IFormsWizard {

  wizardName: WizardNameDTO;
  wizardData: StepsDTO;

  constructor(attributes?: object) {
    attributes = attributes || {};

    this.wizardName = new WizardNameDTO(attributes['wizardName'] || {});
    this.wizardData = new StepsDTO(attributes['wizardData'] || {});
  }

}
