import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractControlComponent} from './abstract-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbstractControlComponent],
  exports: [AbstractControlComponent]
})
export class AbstractControlModule { }
