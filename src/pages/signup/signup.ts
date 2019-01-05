import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import { MaindashboardPage } from '../maindashboard/maindashboard';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  text="password"
  pass_show:boolean=true
  registered:boolean=false;
  @ViewChild('content') content:any;

   constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams)
    {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
     this.presentToast3();
     this.navCtrl.push(MaindashboardPage)
    //this.registered=true;
    //this.content.scrollTop(0)
  }

  showpass(){
    this.pass_show=false
    this.text="text"
  }


  hidepass(){
    this.pass_show=true
    this.text="password"
  }


  gotologin(){
    this.navCtrl.setRoot(MaindashboardPage)
  }

  presentToast3() {
    let toast = this.toastCtrl.create({
      message: 'Successfully Registered !' ,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}

