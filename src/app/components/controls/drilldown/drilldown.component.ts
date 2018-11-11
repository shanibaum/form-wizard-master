import {ChangeDetectionStrategy, Component, ElementRef, Renderer2} from '@angular/core';
import {AbstractTextControlComponent} from '../abstract-text-control/abstract-text-control.component';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrilldownComponent extends AbstractTextControlComponent {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  onDrillDownButtonClick() {
    console.log('clicked');
  }
}
