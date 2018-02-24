import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewbudgetPage } from '../newbudget/newbudget';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { InputsService } from '../service/inputs.services';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  figure: number;

  comments: { title: string }[] = [];
  inputs: { figure: string, selections: string, alerts: string }[] = [];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public is: InputsService
  ) {
  }

  ionViewWillEnter() {

    this.inputs = this.is.getInput();
    console.log(this.inputs);

    for (var i = 0; i < this.inputs.length; i++) {
      console.log(this.inputs[i].figure);
      let figure = +this.inputs[i].figure - 50;
      
      console.log(figure);
      this.figure = figure;
    }
  }

  onNewBudget() {
    this.navCtrl.push(NewbudgetPage);
    // this.modalCtrl.create(NewbudgetPage).present();
  }


}
