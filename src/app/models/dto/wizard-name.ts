import {IWizardName} from '../../interfaces/IWizard-name';

declare let _: any;

export class WizardNameDTO implements IWizardName {

  wizardName: string;

  constructor(name: string) {

    this.wizardName = name || '';
  }
}
