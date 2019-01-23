import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {createHttpObservable} from '../common/util'
import { map, concat } from 'rxjs/operators';
import { of, Observable, interval, merge } from 'rxjs';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const source1$ = of(1,2,3);   
    const source2$ = of(1,2,3);
    const source3$ = of(5,6,7);

    const interval1$ = interval(1000)
    const interval2$ = interval1$.pipe(map(val => 10 * val));
    const Result$ = merge(interval1$,interval2$)
    Result$.subscribe(console.log)

  const result$ = source1$.pipe(concat(source2$,source3$));
  result$.subscribe(console.log)
    const http$ = createHttpObservable('/api/courses');
    const courses$ = http$.pipe(map(res => Object.values( res["payload"])));
    courses$.subscribe(  // subscribe observable
      courses => console.log(courses),
      () => {},
      ()=> {console.log('completed')}
    )
  

}
 




}
