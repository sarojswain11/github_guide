import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RepoService } from '../../services/repo-service';
import { Information } from '../../data/info';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  
  name: string;
  relation: string;
  dob: string;
  icon: string;
  message: string;
  contact: number;

  info: Information;

  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              private repo: RepoService,
              private viewCtrl: ViewController
              ) {
    
  }

  ionViewDidLoad() {    
     const index = this.navParams.get('in');
     this.info = this.repo.getInfoArray(index);

     this.name = this.info.name;
     this.relation = this.info.relation;
     this.dob = this.info.dob;
     this.icon = this.info.icon;
     this.message = this.info.mesage;
     this.contact = this.info.contact;
  }

  onClickSendWishes(){
    this.viewCtrl.dismiss();
  }

}
