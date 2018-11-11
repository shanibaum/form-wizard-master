import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentLoaderComponent} from './dynamic-component-loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [],
  entryComponents: [],
  declarations: [DynamicComponentLoaderComponent],
  exports: [DynamicComponentLoaderComponent]
})

export class DynamicComponentLoaderModule {
}

