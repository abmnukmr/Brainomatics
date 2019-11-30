import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {DashboardPage} from "../dashboard/dashboard";
import {Ng2CsvService} from "ng2csv";
import { Storage } from '@ionic/storage';
import {InstructionsPage} from "../instructions/instructions";
import * as _ from 'lodash';


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
    this.storage.set("performance_history",'')
      

    this.navCtrl.setRoot(DashboardPage,{"Login ID":this.navParams.get("Login ID")})
  }

  downlaod(){
        this.storage.get("performance_history").then((val) => {
          if(val != null || val != undefined) {
           // alert(val)
            let finval= this.getuniquedata(JSON.parse(val))
            
            finval.map((obj)=>{
              delete obj.id
            })
          //  alert(JSON.stringify(finval))
            this.ng2Csv.download(finval,
              'performance_history.csv');
              finval.map((obj)=>{
                  delete obj.id
                })
          }
        })



  }

  getuniquedata(array){

    array.map((obj)=>{
      obj.id=obj["time"]+obj["Game Name"]
    })
    const uniqueLocations = _.uniqBy(array,"id")
    return uniqueLocations
  }


}
