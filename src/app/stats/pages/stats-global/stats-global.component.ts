import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-stats-global',
  templateUrl: './stats-global.component.html',
  styleUrls: ['./stats-global.component.css']
})
export class StatsGlobalComponent implements OnInit {

  countries$: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.countries$ = of(['germany', 'usa', 'france']);
  }

}
