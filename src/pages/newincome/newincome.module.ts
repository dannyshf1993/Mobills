import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewincomePage } from './newincome';

@NgModule({
  declarations: [
    NewincomePage,
  ],
  imports: [
    IonicPageModule.forChild(NewincomePage),
  ],
})
export class NewincomePageModule {}
