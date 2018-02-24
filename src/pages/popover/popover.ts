import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
  <ion-list>
    <button ion-item (click)="close()">Synchronize</button>
    <button ion-item (click)="close()">Manage Dashboard</button>
    <button ion-item (click)="close()">Check PRO version</button>
    <button ion-item (click)="close()">Support</button>
    <button ion-item (click)="close()">Rate Us</button>
    <button ion-item (click)="close()">Settings</button>
  </ion-list>
`
})
export class PopoverPage {
  
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }


}
