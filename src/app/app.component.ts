import { Component } from '@angular/core';
import {DemoService} from './shared/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private demo: DemoService) {
  }
  title = 'edu-routing';
}
