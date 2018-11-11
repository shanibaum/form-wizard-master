import {ChangeDetectionStrategy, Component, ElementRef, Renderer2} from '@angular/core';
import {AbstractTextControlComponent} from '../abstract-text-control/abstract-text-control.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends AbstractTextControlComponent {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

}
