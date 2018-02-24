import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { IncomePage } from '../income/income';
import { ExpensesPage } from '../expenses/expenses';
import { CreditcardPage } from '../creditcard/creditcard';
import { ChartsPage } from '../charts/charts';
import { BudgetPage } from '../budget/budget';
import { BudgetsService } from '../service/budgets.services';
import { NewIncomesService } from '../service/newincome.services';
import { NewExpensesService } from '../service/newexpenses.services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expensebycategor: any[];
  expensebycategory: any;
  balance: number;
  sumexpense: any;
  newexpense: { description: string; number: string; date: string; category: string; checked: boolean; }[];
  sum: any;
  newincome: { description: string; checked: boolean; date: string; number: string; category: string; }[];
  private budgets: { title: string }[] = [];

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public bs: BudgetsService,
    public nis: NewIncomesService,
    public nex: NewExpensesService
  ) {

  }

  ionViewWillEnter() {
    this.budgets = this.bs.getBudget();
    this.newincome = this.nis.getNewIncome();

    //overview income
    var arr = [];
    for (var i = 0; i < this.newincome.length; i++) {
      arr.push(this.newincome[i].number);
    }
    var sum = arr.reduce(add, 0);
    function add(a, b) {
      return +a + +b;
    }
    this.sum = sum;
    this.newexpense = this.nex.getNewExpenses();
    // console.log(this.newexpense[0].category);

    var brry = [];
    for (var i = 0; i < this.newexpense.length; i++) {
      brry.push(this.newexpense[i]);
      this.expensebycategory = brry;
    }
    
    //overview expense
    var arry = [];
    for (var j = 0; j < this.newexpense.length; j++) {
      arry.push(this.newexpense[j].number);
    }

    console.log(arry);
    var sumexpense = arry.reduce(addexpense, 0);
    function addexpense(a, b) {
      return +a + +b;
    }
    this.sumexpense = sumexpense;

    var balance = sum - sumexpense;
    this.balance = balance;

  }

  onNotif() {
    this.navCtrl.push(NotificationPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  onIncomePage() {
    this.navCtrl.setRoot(IncomePage);
  }

  onExpensePage() {
    this.navCtrl.setRoot(ExpensesPage);
  }

  onCreditPage() {
    this.navCtrl.push(CreditcardPage);
  }

  onCharts() {
    this.navCtrl.push(ChartsPage);
  }

  onBudget() {
    this.navCtrl.push(BudgetPage);
  }
}
