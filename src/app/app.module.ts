import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BirthdaysPage}  from '../pages/birthdays/birthdays';
import { NewBdayPage } from '../pages/new-bday/new-bday';
import { RepoService } from '../services/repo-service';
import { ViewPage } from '../pages/view/view';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    BirthdaysPage,
    NewBdayPage,
    ViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BirthdaysPage,
    NewBdayPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RepoService,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
