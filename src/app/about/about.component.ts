import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    document.addEventListener('click', evt => {
      console.log(evt);
      setTimeout(() => {
        console.log('timeout');
        let counter = 0;
        setInterval(() => {
          console.log(counter);
          counter++
        }, 2000)
    
      }, 3000);
  
    })
  }

}
