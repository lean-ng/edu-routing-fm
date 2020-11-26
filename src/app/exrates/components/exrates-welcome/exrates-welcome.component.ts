import { Component, OnInit } from '@angular/core';
import {DemoService as SharedDemoService } from '../../../shared/demo.service';
import {DemoService} from '../../demo.service';

@Component({
  selector: 'app-exrates-welcome',
  templateUrl: './exrates-welcome.component.html',
  styleUrls: ['./exrates-welcome.component.css']
})
export class ExratesWelcomeComponent implements OnInit {

  constructor(private demo: SharedDemoService, private myDemo: DemoService) { }

  ngOnInit(): void {
  }

}
