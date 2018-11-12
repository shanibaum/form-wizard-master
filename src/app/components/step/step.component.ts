import {AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StepDTO} from '../../models/dto/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: StepDTO;
  @ViewChild('stepForm') stepForm: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  isFormValid() {
    return this.stepForm.nativeElement.valid;
  }
}
