import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormValidatorsService} from '../../../services/form-validators.service';
import {FieldErrorsService} from '../../../services/field-errors.service';
import {Subscription} from 'rxjs';

@Component({
  template: ''
})
export class AbstractControlComponent implements OnInit, OnDestroy {
  protected controller;
  protected controlDomElement;
  protected controlError = undefined; // do not change we count on undefined to not show the error
  protected subscription = new Subscription();

  @Input() form;
  @Input() layout;
  @Input() control;

  constructor(elementRef: ElementRef, protected renderer: Renderer2) {
    this.controlDomElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.controller = this.form.get(this.control.id);
    FormValidatorsService.setValidators(this.control.validations, this.controller);

    for (let i = 0 ; i < this.control.validations.length ; i++) {
      if (this.control.validations[i].name === 'Mandatory') {
          this.renderer.addClass(this.controlDomElement, 'fa-mandatory');
      }
    }

    this.subscription.add(this.controller.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        return;
      }

      this.controlError = FieldErrorsService.getErrorText(this.controller.errors, this.control.validations);
    }));

    this.controller.updateValueAndValidity({onlySelf: true, emitEvent: true}); // this is a must to set validation on init
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
