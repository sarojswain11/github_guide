import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NewBdayPage } from '../new-bday/new-bday';
import { RepoService } from '../../services/repo-service';
import { Information } from '../../data/info';
import { ModalController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-birthdays',
  templateUrl: 'birthdays.html',
})
export class BirthdaysPage {

  newBdayPage = NewBdayPage;
  infoArray: Information[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private repo: RepoService,
              private modal: ModalController,
              private alertCtrl: AlertController,
              private sms: SMS
              ) {
  }

  ionViewWillEnter(){
    this.infoArray= this.repo.infoArray;
  }

  viewModal(index: number){
    console.log(index);
    const modal = this.modal.create(ViewPage, {in: index});
    modal.present();
  }

  onSendWishes(index:number){
     const contact = this.infoArray[index].contact;
     const message = this.infoArray[index].mesage;       
     const alert = this.alertCtrl.create({
       title: 'Send Wishes',
       subTitle: 'Are you sure to send wishes to',
       message: contact.toString(),
       buttons: [
         {
           text:'yes',
           handler: () =>{
             this.sms.send(contact.toString(), message);
           }
         },
         {
           text: 'No',
           handler: () => {
             console.log('message has not sent');
           }
         }
       ]
     });
     
     alert.present();
  }

}
