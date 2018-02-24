import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { InputsService } from '../service/inputs.services';


/**
 * Generated class for the NewbudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newbudget',
  templateUrl: 'newbudget.html',
})
export class NewbudgetPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public viewCtrl: ViewController, 
    public is: InputsService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbudgetPage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  onInput(value: {figure: string, selections: string, alerts: string}) {
   this.is.addInput(value);
   this.navCtrl.pop();
  }

}
