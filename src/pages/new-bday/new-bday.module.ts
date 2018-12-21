import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBdayPage } from './new-bday';

@NgModule({
  declarations: [
    NewBdayPage,
  ],
  imports: [
    IonicPageModule.forChild(NewBdayPage),
  ],
})
export class NewBdayPageModule {}
