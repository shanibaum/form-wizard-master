import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule, MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import {AbstractControlModule} from './abstract-control/abstract-control.module';
import {InputComponent} from './input/input.component';
import { ControlLayoutComponent } from './control-layout/control-layout.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AbstractTextControlComponent } from './abstract-text-control/abstract-text-control.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TextareaComponent } from './textarea/textarea.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AbstractControlModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ],
  declarations: [InputComponent, ControlLayoutComponent, AutocompleteComponent, AbstractTextControlComponent,
    DrilldownComponent, DatepickerComponent, TextareaComponent],
  exports: [ControlLayoutComponent],
  entryComponents: [InputComponent, AutocompleteComponent, DatepickerComponent]
})
export class ControlsModule { }
