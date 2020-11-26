import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {DemoService as ExDemoService} from '../../../exrates/demo.service';
import {DemoService} from '../../../shared/demo.service';

@Component({
  selector: 'app-stats-global',
  templateUrl: './stats-global.component.html',
  styleUrls: ['./stats-global.component.css']
})
export class StatsGlobalComponent implements OnInit {

  countries$: Observable<string[]>;

  constructor(private exratesDemo: ExDemoService, private demo: DemoService) {  }

  ngOnInit(): void {
    this.countries$ = of(['germany', 'usa', 'france']);
  }

}
