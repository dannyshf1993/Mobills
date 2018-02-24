import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewIncomesService } from '../service/newincome.services';
import { NewExpensesService } from '../service/newexpenses.services';

/**
 * Generated class for the NewexpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newexpense',
  templateUrl: 'newexpense.html',
})
export class NewexpensePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nes: NewExpensesService
  ) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad NewincomePage');
    }
  
    onNewExpensedata(value: { description: string, number: string, date: string, category: string, checked: boolean }) {
      this.nes.addNewExpense(value);
      this.navCtrl.pop();
    }

}
