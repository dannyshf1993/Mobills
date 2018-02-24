import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbudgetPage } from './newbudget';

@NgModule({
  declarations: [
    NewbudgetPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbudgetPage),
  ],
})
export class NewbudgetPageModule {}
