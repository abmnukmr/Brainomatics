import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {DashboardPage} from "../dashboard/dashboard";
import {Ng2CsvService} from "ng2csv";
import { Storage } from '@ionic/storage';
import {InstructionsPage} from "../instructions/instructions";

/**
 * Generated class for the MaindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maindashboard',
  templateUrl: 'maindashboard.html',
})
export class MaindashboardPage {

  userid:string=""
  constructor(private ng2Csv: Ng2CsvService,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaindashboardPage');
  }

  exit(){
    this.navCtrl.setRoot(LoginPage)
  }


  gotoins(){
    this.navCtrl.push(InstructionsPage)

  }

  play(){

    this.navCtrl.setRoot(DashboardPage,{"Login ID":this.navParams.get("Login ID")})
  }

  downlaod(){


        this.storage.get("performance_history").then((val) => {
          if(val != null || val != undefined) {
            this.ng2Csv.download(JSON.parse(val),
              'performance_history.csv');
          }
        })



  }



}
