import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewexpensePage } from './newexpense';

@NgModule({
  declarations: [
    NewexpensePage,
  ],
  imports: [
    IonicPageModule.forChild(NewexpensePage),
  ],
})
export class NewexpensePageModule {}
