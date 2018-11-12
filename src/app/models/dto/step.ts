import {IStep} from '../../interfaces/IStep';
import {StepTypeDTO} from './step-type';
import {AbstractDTO} from './abstract-dto';

export class StepDTO extends AbstractDTO implements IStep {

  form: Array<any>; // todo
  formId: String;
  formName: String;
  stepLabel: String;
  stepType: StepTypeDTO;


  constructor(attributes?: object) {
    super(attributes);
    attributes = attributes || {};

    this.form = attributes['form'] || {};
    this.formId = attributes['formId'] || '';
    this.formName = attributes['formName'] || '';
    this.stepLabel = attributes['stepLabel'] || '';
    this.stepType = new StepTypeDTO(attributes['stepType'] || {});
  }



}
