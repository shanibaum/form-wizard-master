import { Component , EventEmitter , Input , OnChanges , OnInit , Output , SimpleChanges , ViewChild } from '@angular/core';
import { StepDTO } from '../../models/dto/step';
import { FormBuilderComponent } from '../form-builder/form-builder/form-builder.component';
import { FormControl , FormGroup } from '@angular/forms';

@Component( {
  selector : 'app-step' ,
  templateUrl : './step.component.html' ,
  styleUrls : [ './step.component.scss' ]
} )
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @Input() isFirstStep: boolean;
  @Input() isLastStep: boolean;
  @Input() form: FormGroup;
  @ViewChild( FormBuilderComponent ) formBuilderComponent: FormBuilderComponent;
  @Output() IsFormValid: EventEmitter<boolean> = new EventEmitter<boolean>( false );
  @Output() wizardSubmitted: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    this.isLastStep = false;
    this.isFirstStep = false;
  }

  ngOnInit() {
  }

  isStepSkipped() {
    this.step.isStepSkipped = true;
  }

  isFormValid() {
    if ( this.step.stepType.optional ) {
      return;
    }
    this.step.stepType.completed = this.form.valid;
    this.IsFormValid.emit( this.form.valid );
    if ( this.form.invalid ) {
      this.markAllAsTouched( this.form );
    }
  }

  submit() {
    if ( this.form.invalid ) {
      this.markAllAsTouched( this.form );
      return;
    }
    this.wizardSubmitted.emit();
  }

  private markAllAsTouched( group: FormGroup ) {
    Object.keys( group.controls ).map( ( field ) => {
      const control = group.get( field );
      if ( control instanceof FormControl ) {
        if ( control.invalid && control.errors[ 'Mandatory' ] ) {
          control.markAsTouched( { onlySelf : true } );
          control.markAsDirty( { onlySelf : true } );
          control.updateValueAndValidity( { onlySelf : true } );
        }
      } else if ( control instanceof FormGroup ) {
        this.markAllAsTouched( control );
      }
    } );
  }
}
