import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AbstractControlComponent} from '../abstract-control/abstract-control.component';

@Component({
  selector: 'app-abstract-text-control',
  templateUrl: './abstract-text-control.component.html',
  styleUrls: ['./abstract-text-control.component.scss']
})
export class AbstractTextControlComponent extends AbstractControlComponent implements OnInit {
  controlMaxLength = undefined; // do not change we count on undefined to not show the counter

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();

    for (let i = 0 ; i < this.control.validations.length ; i++) {
      if (this.control.validations[i].name === 'MaxLength') {
        this.controlMaxLength = this.control.validations[i].arguments;
      }
    }
  }
}
