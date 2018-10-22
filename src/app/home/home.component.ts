import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links = [
    { path: 'all', text: 'My Tesks' },
    { path: 'progressing', text: 'in Progress' },
    { path: 'completed', text: 'Completed' }
  ];
  isActive: string;
  isEdit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isActive = this.router.url.split('/')[1];

    this.router.events.pipe(
      filter((routerEvent: RouterEvent) => routerEvent instanceof NavigationEnd),
      map((routerEvent: RouterEvent) => routerEvent.url.split('/'))
    ).subscribe((url: Array<string>) => {
      this.isActive = url[1];
    });
  }

}
