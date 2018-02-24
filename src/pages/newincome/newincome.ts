import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewIncomesService } from '../service/newincome.services';

/**
 * Generated class for the NewincomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newincome',
  templateUrl: 'newincome.html',
})
export class NewincomePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public nis: NewIncomesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewincomePage');
  }

  onNewIncomedata(value: {description: string, checked: boolean, date: string, number: string, category: string }) {
    this.nis.addNewIncome(value);
    this.navCtrl.pop();
  }

  
  
}
