import {IStepType} from '../../interfaces/IStepType';

declare let _: any;

export class StepTypeDTO implements IStepType {

  completed: boolean;
  editable: boolean;
  optional: boolean;

  constructor(attributes?: object) {
    attributes = attributes || {};

    this.completed = attributes['completed'] || false;
    this.editable = attributes['editable'] || false;
    this.optional = attributes['optional'] || false;
  }



}
