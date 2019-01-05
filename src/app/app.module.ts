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
