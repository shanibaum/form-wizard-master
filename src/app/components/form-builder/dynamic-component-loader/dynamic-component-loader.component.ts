import {
  Component,
  ComponentFactoryResolver,
  Input, OnChanges, OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ComponentMapper} from './component-mapper';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.scss'],
})
export class DynamicComponentLoaderComponent implements OnDestroy, OnChanges {
  factory;
  componentRef;
  @ViewChild('container', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  @Input() component;
  @Input() form;
  @Input() injectableData;

  /////////////////

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges() {
    const component = ComponentMapper.stringToComponent[this.component];

    if (component == null) {
      return;
    }

    this.factory = this.componentFactoryResolver.resolveComponentFactory(component);

    if (this.factory == null) {
      return;
    }

    this.viewContainerRef.clear();
    this.componentRef = this.viewContainerRef.createComponent(this.factory);

    (this.componentRef.instance).form = this.form;

    if (this.injectableData != null) {
      for (const key in this.injectableData) {
        if (this.injectableData.hasOwnProperty(key)) {
          (this.componentRef.instance)[key] = this.injectableData[key];
        }
      }
    }
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
  }

}
