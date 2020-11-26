import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-exrates-rates',
  templateUrl: './exrates-rates.component.html',
  styleUrls: ['./exrates-rates.component.css']
})
export class ExratesRatesComponent implements OnInit {

  currency: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
        map(params => params.get('currency')),
        tap(currency => this.currency = currency)
      ).subscribe();
  }

}
