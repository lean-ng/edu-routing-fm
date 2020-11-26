import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoService} from './demo.service';
import {AdBannerComponent} from './ad-banner/ad-banner.component';

let serviceName: string;
export function demoServiceFactory(): DemoService {
  return new DemoService(serviceName);
}

@NgModule({
  declarations: [AdBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdBannerComponent
  ]
})
export class SharedModule {
  static forRoot(options: { name: string }): ModuleWithProviders<SharedModule> {
    serviceName = options.name;
    return { ngModule: SharedModule, providers: [{
        provide: DemoService, useFactory: demoServiceFactory
    }] };
  }
}
