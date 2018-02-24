import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  segment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.segment = 'profile';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
