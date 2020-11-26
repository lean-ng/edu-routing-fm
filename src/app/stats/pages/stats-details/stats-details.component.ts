import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stats-details',
  templateUrl: './stats-details.component.html',
  styleUrls: ['./stats-details.component.css']
})
export class StatsDetailsComponent implements OnInit {

  country$: Observable<string>;
  country: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // No need to unsubscribe!
    this.country$ = this.route.paramMap.
      pipe(
        map(params => params.get('country')),
        tap(country => this.country = country)
      );
  }

  backToList(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

}
