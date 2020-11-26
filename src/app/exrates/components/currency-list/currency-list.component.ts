import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies$: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.currencies$ = of(['EUR', 'USD', 'GBP', 'CHF']);
  }

}
