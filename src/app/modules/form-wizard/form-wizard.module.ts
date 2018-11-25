import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormWizardComponent} from '../../components/form-wizard/form-wizard.component';
import {RouterModule} from '@angular/router';
import {WizardStepperComponent} from '../../components/wizard-stepper/wizard-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import { FormGeneratorModule } from '../../components/form-generator/form-generator.module';
// import { FormDataApiService } from '../../services/form-data-api.service';
import {StepComponent} from '../../components/step/step.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormWizardComponent,
    WizardStepperComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
  providers: [],
})
export class FormWizardModule { }
