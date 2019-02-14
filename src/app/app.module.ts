import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPageModule} from "../pages/login/login.module";
import {SignupPageModule} from "../pages/signup/signup.module";
import {DashboardPageModule} from "../pages/dashboard/dashboard.module";
import {Game1PageModule} from "../pages/game1/game1.module";
import {IonicStorageModule} from "@ionic/storage";
import { MaindashboardPageModule } from '../pages/maindashboard/maindashboard.module';
import {Ng2CsvModule, Ng2CsvService} from "ng2csv";
import {InstructionsPageModule} from "../pages/instructions/instructions.module";
import {Game2PageModule} from "../pages/game2/game2.module";
import {Game3PageModule} from "../pages/game3/game3.module";
import {Game4PageModule} from "../pages/game4/game4.module";
import { Game5PageModule } from '../pages/game5/game5.module';
import { Game6PageModule } from '../pages/game6/game6.module';
import { Game7PageModule } from '../pages/game7/game7.module';
import { Game10PageModule } from '../pages/game10/game10.module';
import { Game9PageModule } from '../pages/game9/game9.module';
import { Game8PageModule } from '../pages/game8/game8.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    Ng2CsvModule,
    BrowserModule,
    LoginPageModule,
    SignupPageModule,
    DashboardPageModule,
    Game1PageModule,
    Game2PageModule,
    Game3PageModule,
    Game4PageModule,
    Game5PageModule,
    Game6PageModule,
    Game7PageModule,
    Game8PageModule,
    Game9PageModule,
    Game10PageModule,
    InstructionsPageModule,
    MaindashboardPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Ng2CsvService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
