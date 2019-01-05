import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {DashboardPage} from "../dashboard/dashboard";
import {MaindashboardPage} from "../maindashboard/maindashboard";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user=[{"id":"user","password":"User123"},
    {"id":"admin","password":"Admin123"},
    {"id":"guest","password":"Guest123"}
  ]
  text="password";
  userid="";
  pass="";
  pass_show:boolean=true
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }


  login(){

    var index = this.user.map((d)=> { return d['id']; }).indexOf(this.userid.toLowerCase())
    var index2 = this.user.map((d)=> { return d['password']; }).indexOf(this.pass)

      if(index !=-1 && index2 !=-1)
      {
        this.navCtrl.push(MaindashboardPage,{"Login ID":this.userid})
        this.presentToast3();
         }
      else{
         this.presentToast2();
      }

    }

  showpass(){

    this.pass_show=false
    this.text="text"
  }


  hidepass(){
    this.pass_show=true
    this.text="password"

  }


  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'Invalid userid or password' ,
      duration: 700,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }


  presentToast3() {
    let toast = this.toastCtrl.create({
      message: 'Successfully login !' ,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }


  register(){
    this.navCtrl.setRoot(SignupPage)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
