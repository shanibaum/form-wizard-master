import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormWizardComponent} from '../../components/form-wizard/form-wizard.component';
import {RouterModule} from '@angular/router';
import {WizardStepperComponent} from '../../components/wizard-stepper/wizard-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import { FormGeneratorModule } from '../../components/form-generator/form-generator.module';
import { FormDataApiService } from '../../services/form-data-api.service';
import {StepComponent} from '../../components/step/step.component';

@NgModule({
  declarations: [
    FormWizardComponent,
    WizardStepperComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormGeneratorModule,
    RouterModule.forChild([{
      path: '',
      component: FormWizardComponent
    }]),
  ],
  providers: [FormDataApiService],
})
export class FormWizardModule { }
