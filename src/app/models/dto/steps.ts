import {ISteps} from '../../interfaces/ISteps';
import {StepDTO} from './step';
import {AbstractDTO} from './abstract-dto';

declare let _: any;

export class StepsDTO extends AbstractDTO implements ISteps {

  steps: StepDTO[];

  constructor(attributes?: object) {
    super(attributes);
    attributes = attributes || {};
    this.steps = StepDTO.createFromArray(attributes['steps'] || []);
  }

}
