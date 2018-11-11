import {IFormsWizard} from '../../interfaces/IFormsWizard';
import {StepsDTO} from './steps';
import { WizardName , WizardNameDTO , WizardTypeDTO } from './wizard-name';

declare let _: any;

export class FormsWizardDTO implements IFormsWizard {

  wizardName: WizardNameDTO;
  wizardData: StepsDTO;

  constructor(attributes?: object) {
    attributes = attributes || {};

    this.wizardName = new WizardNameDTO(attributes['WizardName'] || {});
    this.wizardData = new StepsDTO(attributes['wizardData'] || {});
  }

}
