import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Reddit {
  url: string = "https://www.reddit.com/new.json";
  constructor(private http: Http) {}

  get() {
    return Observable.create(observer => {
      this.http.get(this.url).map(res => res.json()).subscribe(data => {
        observer.next(data.data.children);
      });
    });
  }
}