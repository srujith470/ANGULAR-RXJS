import { Observable } from "rxjs";


export function createHttpObservable(url:string){
  
    return Observable.create(observer  => { // create observable
    fetch('/api/courses')     // promise
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete(); 
      })
      .catch(err => {
        observer.error(err);
      })
  });
  }
  