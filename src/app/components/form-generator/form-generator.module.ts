import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import {FormBuilderModule} from '../form-builder/form-builder.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormBuilderModule,
  ],
  declarations: [FormGeneratorComponent],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
