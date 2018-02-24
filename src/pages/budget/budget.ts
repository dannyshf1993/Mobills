import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BudgetsService } from '../service/budgets.services';

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public bs : BudgetsService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');
  }

  onBudget(value) {
    this.bs.addBudget(value);
    this.navCtrl.pop();
  }
}
