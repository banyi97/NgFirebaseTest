import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-routeA',
  templateUrl: './routeA.component.html'
})
export class RouteAComponent implements OnInit {
    ngOnInit(): void {
      console.log('log')  
    }

}