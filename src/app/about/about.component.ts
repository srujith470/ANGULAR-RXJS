import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    //const interval$ = interval(1000);
    const interval$ = timer(4000,1000); // create observable
    const click$ = fromEvent(document, 'click'); // create observable

    const subscription = interval$.subscribe(val => console.log("stream1:" + val)); // subscribe observable
    
    setTimeout(() => {
        subscription.unsubscribe() 
    }, 11000); // unsubscribe observable
    
    click$.subscribe(
      evt => console.log(evt),
      err => console.log(err),
      () => console.log("completed")
      ); // subscribe observable
    }

}
