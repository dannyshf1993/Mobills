import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewIncomesService } from '../service/newincome.services';
import { NewexpensePage } from '../newexpense/newexpense';
import { NewExpensesService } from '../service/newexpenses.services';

/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {
  sum: any;
  newexpenses: { description: string, number: string, date: string, category: string, checked: boolean }[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nes: NewExpensesService
  ) {
  }

  ionViewWillEnter() {
    var expenses = [];
    this.newexpenses = this.nes.getNewExpenses();
    console.log(this.newexpenses);
    for (var i = 0; i < this.newexpenses.length; i++) {
      expenses.push(this.newexpenses[i].number);
    }
    var sum = expenses.reduce(add, 0);
    function add(a, b) {
      return +a + +b;
    }
    console.log(sum);
    this.sum = sum;
  }

  onNewExpense() {
    this.navCtrl.push(NewexpensePage);
  }
}
