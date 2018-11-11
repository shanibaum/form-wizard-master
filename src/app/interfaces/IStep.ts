import {IStepType} from './IStepType';

export interface IStep  {
  formId: String;
  formName: String;
  stepLabel: String;
  stepType: IStepType;
  form: object;
}
