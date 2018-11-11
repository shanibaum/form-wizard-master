import {ChangeDetectionStrategy, Component, ElementRef, Renderer2} from '@angular/core';
import {AbstractTextControlComponent} from '../abstract-text-control/abstract-text-control.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends AbstractTextControlComponent {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
