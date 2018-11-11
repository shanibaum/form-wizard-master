import {InputComponent} from '../../controls/input/input.component';
import {AutocompleteComponent} from '../../controls/autocomplete/autocomplete.component';
import {DatepickerComponent} from '../../controls/datepicker/datepicker.component';
import {TextareaComponent} from '../../controls/textarea/textarea.component';
import {DrilldownComponent} from '../../controls/drilldown/drilldown.component';

export class ComponentMapper {
  public static readonly stringToComponent = {
    'input': InputComponent,
    'autocomplete': AutocompleteComponent,
    'datepicker': DatepickerComponent,
    'textarea': TextareaComponent,
    'drilldown': DrilldownComponent
  };
}
