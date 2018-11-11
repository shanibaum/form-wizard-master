import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ControlBuilderComponent } from './control-builder/control-builder.component';
import {ControlsModule} from '../controls/controls.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicComponentLoaderModule} from './dynamic-component-loader/dynamic-component-loader.module';
import {BrowserModule} from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    ControlsModule,
    DynamicComponentLoaderModule,
    MatExpansionModule
  ],
  declarations: [FormBuilderComponent, ControlBuilderComponent],
  exports: [FormBuilderComponent],
  entryComponents: []
})
export class FormBuilderModule { }
