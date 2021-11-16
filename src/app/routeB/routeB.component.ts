import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-routeB',
  templateUrl: './routeB.component.html'
})
export class RouteBComponent implements OnInit {
    ngOnInit(): void {
      console.log('log2')  
    }

}