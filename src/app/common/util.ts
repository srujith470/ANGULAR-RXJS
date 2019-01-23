import { Observable } from "rxjs";


export function createHttpObservable(url:string){
    const controller = new AbortController();
    const signal = controller.signal;

    return Observable.create(observer  => { // create observable
    fetch(url, {signal})     // promise
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete(); 
      })
      .catch(err => {
        observer.error(err);
      });
      return() => {
        controller.abort
      }
  });


  }
  