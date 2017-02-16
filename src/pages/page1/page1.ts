import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Reddit } from '../../providers/reddit';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  feed: any;
  constructor(public navCtrl: NavController, private reddit: Reddit) {
    reddit.get().subscribe((response) => {
      this.feed = response;
    })
  }
}
