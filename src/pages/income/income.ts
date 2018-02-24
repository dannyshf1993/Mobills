import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewincomePage } from '../newincome/newincome';
import { NewIncomesService } from '../service/newincome.services';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  sumincome: any;
  sum: any;
  newincomes: { description: string, checked: boolean, date: string, number: string, category: string }[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public nid: NewIncomesService) {
  }

  ionViewWillEnter() {
    var incomes = [];

    this.newincomes = this.nid.getNewIncome();
    for (var i = 0; i < this.newincomes.length; i++) {
      console.log(this.newincomes[i].number);
      incomes.push(this.newincomes[i].number);
    }
    var sum = incomes.reduce(add, 0);

    function add(a, b) {
      return +a + +b;
    }
    console.log(sum);
    this.sumincome = sum;
  }

  onNewIncome() {
    this.navCtrl.push(NewincomePage);
  }

}
