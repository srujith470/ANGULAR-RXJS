import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import { map,filter, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';
import { noop, Observable } from 'rxjs';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {
    }

    ngOnInit() {
        const http$ = createHttpObservable('/api/courses')
        const courses$: Observable<Course[]> = http$
                        .pipe(
                            tap(() => console.log('HTTP REQUEST EXECUTED')),
                            map(res=> Object.values(res["payload"])),
                            shareReplay()
                            );
        this.beginnerCourses$ = courses$
        .pipe(
            map(courses=>
                courses.filter(course=> course.category=="BEGINNER")
            )
        );
        this.advancedCourses$ = courses$
        .pipe(
            map(courses =>
                courses.filter(course=> course.category=="ADVANCED")
            )
        );
    }
}
