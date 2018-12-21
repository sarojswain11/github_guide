import { Component } from '@angular/core';
import { Information } from '../../data/info';
import { NgForm } from '@angular/forms';
import { RepoService } from '../../services/repo-service';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-new-bday',
  templateUrl: 'new-bday.html',
})
export class NewBdayPage {

  newInfo: Information;

  constructor(private repo: RepoService, private toast: ToastController){}

  onSubmit(data:NgForm){
    const formData = data.value;    
    this.newInfo = new Information(formData.name, formData.relation, formData.dob, formData.image, formData.message, formData.contact);
    this.repo.addInfoArray(this.newInfo);

    // toast section
     
    const toast = this.toast.create(
      {
        message: 'Birthday Reminder added successfully',
        duration:3000,
        position: 'bottom'
      }
    );
    toast.present();
  }



}
