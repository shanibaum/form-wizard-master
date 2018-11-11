import {IWizardName} from '../../interfaces/IWizard-name';

declare let _: any;

export class WizardNameDTO implements IWizardName {

  name: string;

  constructor(name: string) {

    this.name = name || '';
  }
}
