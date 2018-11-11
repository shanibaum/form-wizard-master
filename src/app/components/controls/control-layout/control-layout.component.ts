import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-control-layout',
  templateUrl: './control-layout.component.html',
  styleUrls: ['./control-layout.component.scss']
})
export class ControlLayoutComponent {
  @Input() layout;
}
