import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Game1Page} from "../game1/game1";
import {NativeAudio} from "@ionic-native/native-audio";
import {Ng2CsvService} from "ng2csv";
import {MaindashboardPage} from "../maindashboard/maindashboard";
import { Storage } from '@ionic/storage';
import {Game2Page} from "../game2/game2";
import {Game3Page} from "../game3/game3";
import { bloomAdd } from '@angular/core/src/render3/di';
import { Game4Page } from '../game4/game4';
import { Game7Page } from '../game7/game7';
import { Game6Page } from '../game6/game6';
import { Game5Page } from '../game5/game5';
import { Game8Page } from '../game8/game8';
import { Game10Page } from '../game10/game10';
/**
 * Generated class for the Game9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game9',
  templateUrl: 'game9.html',
})
export class Game9Page {

  res_result:any;
  res_checklist:any;
  counter:number=0
  timz:any;
  seczo:any;
  checklist:any=[];
  timeup:boolean=false;
  ms: any;
  ytime:number=0
  start:boolean=false;
  block1:boolean=false
  block2:boolean=false
  block3:boolean=false
  block4:boolean=false
  block5:boolean=false
  block6:boolean=false
  block7:boolean=false
  block8:boolean=false
  block_9:boolean=false
  block10:boolean=false
  block11:boolean=false
  block12:boolean=false
  block13:boolean=false
  block14:boolean=false
  block15:boolean=false
  block9:boolean=false
  block99:boolean=false
  d_result:any=[]
  number:number;
  Strnumber:string="";
  block:number;
  minuted:number=0;
  minutecount:string='00';
  secondcount:string='00';
  milisecond:number=0
  miliseconddd:string='00';
  sect:number=0;
  milisecondd:string='0000';
  sec:number=0;
  attemptcpunt=[]
  testarray=[]
  gamestart1:boolean=false;
  first1:boolean=true;
  first2:boolean=true;
  first3:boolean=true;
  first4:boolean=true;
  first5:boolean=true;
  first6:boolean=true;
  first7:boolean=true;
  first8:boolean=true;
  first9:boolean=true; 
  first11:boolean=true;
  first12:boolean=true;
  first13:boolean=true;
  first14:boolean=true;
  first10:boolean=true;
  first15:boolean=true;
  eightt:boolean=true;
  nine:boolean=true;
  zero:boolean=true;
  score:number=0;
  repeatshow:boolean=false;
  level:number=1;
  checkattempt:number=0;
  attempt:number=0;
  result:any=[]
  checkindex:number=1;
  index_number:number;
  result_number:number;
  result_numberr:string=""
  gamename:any="Lights On";
  game1:boolean=false;
  blockarray=[]
  numarray=[]
  minShow:string='02';
  secShow:string='00';
  levelreturn:boolean=false;
  resultarray:any=[]
  levelreturncount:number=0;
  attemptcount:number=0;
  secarray:any=['00','59','58','57','56','55', '54', '53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','09','08','07','06','05','04','03','02','01']
 Games:any=
     [{"name":"Game 01","page":Game1Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 02","page":Game2Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 03","page":Game3Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 04","page":Game4Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 05","page":Game5Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 06","page":Game6Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 07","page":Game7Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 08","page":Game8Page,"icon":"ios-unlock","color":"primary"},
     {"name":"Game 09","page":Game9Page,"icon":"ios-unlock","color":"secondary"},
     {"name":"Game 10","icon":"lock","color":"white"}
     ]

 Level:any=
   [ {"name":"Level 01","icon":"ios-unlock","color":"primary"},
      {"name":"Level 02","icon":"ios-unlock","color":"primary"},
      {"name":"Level 03","icon":"lock","color":"white"},
      {"name":"Level 04","icon":"lock","color":"white"},
      {"name":"Level 05","icon":"lock","color":"white"},
      {"name":"Level 06","icon":"lock","color":"white"}
   ]

   result1:any;

  constructor(public storage:Storage ,private ng2Csv: Ng2CsvService,public zone:NgZone,public toastCtrl:ToastController ,public ngZone:NgZone,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

  }

  public download(): void {
    this.ng2Csv.download(this.resultarray,
      'Result.csv');
  }

  onload() {
   this.start=!this.start
    setTimeout(()=>{
     this.block1=true
      setTimeout(()=>{
        this.block2=true
        setTimeout(()=>{
          this.block3=true
          setTimeout(()=>{
            this.block4=true
            setTimeout(()=>{
              this.block5=true
              setTimeout(()=>{
                this.block6=true
                setTimeout(()=>{
                  this.block7=true
                  setTimeout(()=>{
                    this.block8=true
                    setTimeout(()=>{
                        this.block_9=true
                        setTimeout(()=>{
                          this.block11=true
                          setTimeout(()=>{
                            setTimeout(()=>{
                              this.block10=true
                              setTimeout(()=>{
                                this.block12=true
                                this.block13=true
                                this.block14=true
                                this.block15=true
                                this.block11=true
                                setTimeout(()=>{
                                  this.block9=true
                              },500)
                            },100)
                          },100)
                        },100)
                      },500)
                    },500)
                  },200)
                },205)
              },210)
            },230)
          },250)
        },300)
      },300)
    },300)
    this.eightt=true
    console.log('ionViewDidLoad DashboardPage');
  }
  gotolevel1(){
    this.game1=false;
    this.gamename="Lights On"
  }
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
  goto(n){

    setTimeout(()=> {

      var blk = this.randomIntFromInterval(1,14)
      if (blk == 9 || blk == 0) {
        blk = 1
      }
      this.block = Number.parseInt(blk.toString())
      var num = this.randomIntFromInterval(1,14)
      this.number = Number.parseInt(num.toString())
      var index:number=this.blockarray.indexOf(this.block)
      var index2:number=this.numarray.indexOf(this.number)
      console.log("inloop"+index + index2)
      if(index != -1 || index2 !=-1) {
        while (index != -1 || index2 != -1) {
          console.log(JSON.stringify(this.blockarray) + JSON.stringify(this.numarray))
          console.log("loop start" + index + index2)
          var blk = this.randomIntFromInterval(1,14)
          if (blk == 9 || blk == 0) {
            blk = 1
          }
          this.block = Number.parseInt(blk.toString())
          var num = this.randomIntFromInterval(1,14)
          this.number = Number.parseInt(num.toString())
          index = this.blockarray.indexOf(this.block)
          index2 = this.numarray.indexOf(this.number)
          console.log("after" + index + index2)
          if (index2 == -1 && index == -1) {
            break;
          }
          else {
            continue;
          }
        }
      }
      else {

      }
      console.log("After loop")
      var colo = this.block.toString();
      this.blockarray.push(this.block)
      this.numarray.push(this.number)
      this.Strnumber = this.block.toString()
      // this.getcount=this.getcount
      this.result.push( this.block)
      this.audioplay() 
      switch (colo) {
        case "1":
          this.first1 = false;

          break;
        case "2":
          this.first2 = false;

          break;
        case "3":
          this.first3 = false;

          break;
        case "4":
          this.first4 = false;
          break;
        case "5":
          this.first5 = false;
          break;
        case "6":
          this.first6 = false;
          break;
        case "7":
          this.first7 = false;
          break;
        case "8":
          this.first8 = false;
          break;
        case "9":
          this.first9 = false;
          break;
        case "10":
          this.first10 = false;
          break;
        case "11":
          this.first11 = false;
          break;
        case "12":
          this.first12 = false;
          break;
        case "13":
          this.first13 = false;
          break;
        case "14":
          this.first14 = false;
          break;
      }

      setTimeout(() => {
        console.log("okk")
        this.first1 = true;
        this.first2 = true;
        this.first3 = true;
        this.first4 = true;
        this.first5 = true;
        this.first6 = true;
        this.first7 = true;
        this.first8 = true;
        this.first9 = true;
        this.first10 = true;
        this.first11 = true;
        this.first12 = true;
        this.first13 = true;
        this.first14 = true;

        this.res_result=this.result.join();
      }, 2000)


    },1000)
  }
  checkresult(n){
    if(this.block99==false) {
      switch (n.toString()) {
        case "1":
          this.first1 = false;
          this.Strnumber="";
          break;
        case "2":
          this.first2 = false;
          this.Strnumber="";
          break;
        case "3":
          this.first3 = false;
          this.Strnumber="";
          break;
        case "4":
          this.first4 = false;
          this.Strnumber="";
          break;
        case "5":
          this.first5 = false;
          this.Strnumber="";
          break;
        case "6":
          this.first6 = false;
          this.Strnumber="";
          break;
        case "7":
          this.first7 = false;
          this.Strnumber="";
          break;
        case "8":
          this.first8 = false;
          this.Strnumber="";
          break;
        case "9":
          this.first9 = false;
          this.Strnumber="";
          break;
        case "10":
          this.first10 = false;
          this.Strnumber="";
          break;
        case "11":
          this.first11 = false;
          this.Strnumber="";
          break;
        case "12":
          this.first12 = false;
          this.Strnumber="";
          break;  
        case "13":
          this.first13 = false;
          this.Strnumber="";
          break; 
        case "14":
          this.first14 = false;
          this.Strnumber="";
          break;   
      }
      this.checklist.push(n)
      this.res_checklist = this.checklist.join()
      if (this.result.length == this.checklist.length) {
        setTimeout(()=>{
          this.check()
        },2000)
      }
      else {

      }
    }
  }
  ionViewDidEnter(){
    this.resultarray=this.navParams.get("result");
    this.score=this.navParams.get("score");
  }
  agamestart() {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
      setTimeout(() => {
        this.goto(3)
        setTimeout(() => {
          this.goto(3)
          setTimeout(() => {
            this.repeatshow=true
            var ct = Math.random() + 0.5
            this.index_number =1
            var er = this.result[this.index_number]
            this.result_number = er.number_res
            this.result_numberr=this.result_number.toString()
            this.repeatshow=true
            this.presentToast1(this.result_numberr)
          }, 3000)
        }, 3000)
    }, 100)
  }
  gamestart2() {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
    setTimeout(() => {
      this.goto(4)
      setTimeout(() => {
        this.goto(4)
        setTimeout(() => {
          this.goto(4)
          setTimeout(() => {
              this.repeatshow=true
              var ct = Math.random() + 0.5
              this.index_number = 1
              var er = this.result[this.index_number]
              this.result_number = er.number_res
              this.result_numberr=this.result_number.toString()
              this.presentToast1(this.result_numberr)
              this.repeatshow=true
          },3000)
        }, 3000)
      }, 3000)
    }, 100)
   }
  gamestart3() {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
    setTimeout(() => {
      this.goto(5)
      setTimeout(() => {
        this.goto(5)
        setTimeout(() => {
          this.goto(5)
          setTimeout(() => {
             this.goto(5)
             setTimeout(() => {
                this.repeatshow=true
                var ct = Math.random() + 0.5
                this.index_number = 2
                var er = this.result[this.index_number]
                this.result_number = er.number_res
                this.result_numberr=this.result_number.toString()
                this.presentToast1(this.result_numberr)
                this.repeatshow=true
             },3000)
          }, 3000)
        }, 3000)
      }, 3000)

    }, 100)
  }
  gamestart4() {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
    setTimeout(() => {
      this.goto(6)
      setTimeout(() => {
        this.goto(6)
        setTimeout(() => {
          this.goto(6)
          setTimeout(() => {
            this.goto(6)
            setTimeout(() => {
               this.goto(6)
              setTimeout(() => {
                  this.repeatshow=true
                  var ct = Math.random() + 0.5
                  this.index_number = 2
                  var er = this.result[this.index_number]
                  this.result_number = er.number_res
                  this.result_numberr=this.result_number.toString()
                  this.presentToast1(this.result_numberr)
                  this.repeatshow=true
              },3000)
            }, 3000)
          }, 3000)
        }, 3000)
      }, 3000)
    }, 100)
  }
  gamestart5() {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
    setTimeout(() => {
      this.goto(7)
      setTimeout(() => {
        this.goto(7)
        setTimeout(() => {
          this.goto(7)
          setTimeout(() => {
            this.goto(7)
            setTimeout(() => {
              this.goto(7)
              setTimeout(() => {
                  this.goto(7)
                  setTimeout(() => {
                    this.repeatshow=true
                    var ct = Math.random() + 0.5
                    this.index_number =3
                    var er = this.result[this.index_number]
                    this.result_number = er.number_res
                    this.result_numberr=this.result_number.toString()
                    this.presentToast1(this.result_numberr)
                    this.repeatshow=true

                  },3000)
              }, 3000)

            }, 3000)

          }, 3000)

        }, 3000)

      }, 3000)

    }, 100)

  }
  gamestart6 () {
    this.blockarray=[]
    this.numarray=[]
    this.Strnumber=""
    this.gamestart1 = true;
    setTimeout(() => {
      this.goto(8)
      console.log("first time")
      setTimeout(() => {
        this.goto(8)
        console.log("second time")
        setTimeout(() => {
          this.goto(8)
          console.log("third time")
          setTimeout(() => {
            this.goto(8)
            console.log("fourth time")
            setTimeout(() => {
              this.goto(8)
              setTimeout(() => {
                this.goto(8)
                console.log("fifth  time")
                setTimeout(() => {
                  this.goto(8)
                  console.log("sixth time")
                    setTimeout(()=>{
                      this.repeatshow=true
                      var ct = Math.random() + 0.5
                      this.index_number = 4
                      var er = this.result[this.index_number]
                      this.result_number = er.number_res
                      this.result_numberr=this.result_number.toString()
                      this.presentToast1(this.result_numberr)
                      this.repeatshow=true

                  },3000)
                }, 3000)
              }, 3000)
            }, 3000)
          }, 3000)
        }, 3000)
      }, 3000)
    }, 100)
  }
  level4(num) {
    this.level=num
    this.number=null;
    this.gamestart1=false;
  }
  startgame(){
    this.repeatshow=false
    this.first1 = true;
    this.first2 = true;
    this.first3 = true;
    this.first4 = true;
    this.first5 = true;
    this.first6 = true;
    this.first7 = true;
    this.eightt = true;
    this.nine = true;
    this.zero = true;
    this.block9=false;
    this.minuted=0;
    this.minutecount='00';
    this.secondcount='00';
    this.milisecond=0
    this.miliseconddd='00';
    this.sect=0;
    this.milisecondd='0000';
    this.sec=0;
    this.testarray=[]
    if(this.attemptcount==18)
    {
      this.attemptloose();
      this.gotohome()
    }else {
      this.countdown();
      this.mssatrt()
      this.result_numberr = ""
      switch (this.level) {
        case 1:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.agamestart()
          break;
        case 2:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart2()
          break;
        case 3:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart3()
          break;
        case 4:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart4()
          break;
        case 5:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart5()
          break;
        case 6:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart6()
          break;
      }
    }
  }
  startgame3(){
    this.repeatshow=false
    this.first1 = true;
    this.first2 = true;
    this.first3 = true;
    this.first4 = true;
    this.first5 = true;
    this.first6 = true;
    this.first7 = true;
    this.eightt = true;
    this.block9=false;
    clearInterval(this.timz)
    clearInterval(this.seczo)
    this.ytime=0
    this.secShow='00';
    this.timeup=false;
    this.counter=0;
    this.minShow='02';
    this.minuted=0;
    this.minutecount='00';
    this.secondcount='00';
    this.milisecond=0
    this.miliseconddd='00';
    this.sect=0;
    this.milisecondd='0000';
    this.sec=0;
    this.block9=false;
    this.block99=false;
    this.minuted=0;
    this.minutecount='00';
    this.secondcount='00';
    this.milisecond=0
    this.miliseconddd='00';
    this.milisecondd='0000';
    this.sec=0;
    this.testarray=[]
    if(this.attemptcount==18)
    {
      this.attemptloose();
    }
    else {
      this.result_numberr = ""
      this.countdown();
      this.mssatrt()
      switch (this.level)
      {
        case 1:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.agamestart()
          break;
        case 2:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart2()
          break;
        case 3:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart3()
          break;
        case 4:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart4()
          break;
        case 5:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart5()
          break;
        case 6:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.gamestart6()
          break;
      }
    }
  }

  audioplay() {
    //alert("Play")
    let a = new Audio();
    a.src = 'assets/audio/flash.mp3';
    a.play()
  }

  calc(){
    var min= Number.parseInt(this.minShow)
    var sec= Number.parseInt(this.secShow)
    var res_sec=60-sec
    var res_min
    if(min==0){
      res_min=1
      if(min==0 && sec==0){
        res_min=2
        res_sec=0
        this.miliseconddd="00"
        res_min = res_min<10?"0"+res_min.toString():res_min

      }
      //res_min = res_min<10?"0"+res_min.toString():res_min
      //res_sec = res_sec<10?"0"+res_sec.toString():res_sec

    }else {
      res_min = 1 - min
      // res_min = res_min<10?"0"+res_min.toString():res_min
      // res_sec = res_sec<10?"0"+res_sec.toString():res_sec

    }
    return res_min.toString()+":"+res_sec.toString()+":"+ this.miliseconddd
  }
  check() {
    this.attemptcount=this.attemptcount+1
    this.repeatshow=false;
    clearInterval(this.timz)
    clearInterval(this.seczo)
    this.attemptcpunt.push("1")
    var d = new Date()
    var month = d.getMonth()+1
    this.d_result.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Lights On", "Level":this.level,"Attempt":this.attemptcpunt.length,"Score":this.score,"TimeTaken":this.secShow})
    this.storage.set("game_history",JSON.stringify(this.d_result))
    var er = this.result[this.index_number]
    var blk = this.checklist.join().toString();
    this.res_result=this.result.join().toString();
    // alert(this.res_result +"===="+blk)
    if(blk==this.res_result)
    {
      this.testarray.push(1)
      this.result_numberr = ""
      this.checklist=[]
      this.result = []
      this.attempt = this.attempt + 1
      if(this.levelreturn==true){
        this.score = this.score + 1;
        this.attempt = this.attempt - 1

        this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Lights On","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":1})
        this.storage.set("performance_history",JSON.stringify(this.resultarray))
      }
      else {
      if(this.level==5||this.level==6) {
        if (this.attempt%3==0) {
          this.resultarray.push({
            "Login ID": this.navParams.get("Login ID"),
            "time":this.calc(),
            "Date": d.getDate() + "-" + month + "-" + d.getFullYear(),
            "Game Name": "Digit Shelves",
            "attempt": this.attemptcpunt.length,
            "Level": this.level,
            "result": "S",
            "Score": 4
          })
          this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Light On","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":4})

          this.block99 = true;
          this.Bonus()
          this.attemptcount=this.attemptcount+1
         
          this.storage.set("performance_history", JSON.stringify(this.resultarray))

          if (this.level == 6 && this.attempt % 6 == 0) {


            let a = new Audio();
            a.src = 'assets/audio/applause.mp3';
            a.play();
            this.gotogame_2()
          }
        }

        else {
          this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month +"-"+d.getFullYear(),"Game Name":"Lights On","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":2})
          this.storage.set("performance_history",JSON.stringify(this.resultarray))

        }

      }
      else {
        this.score = this.score + 2;
        this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Lights On","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":2})
        this.storage.set("performance_history",JSON.stringify(this.resultarray))
      }
     
      }

      this.presentToast6()
      if (this.attempt%3==0 || this.levelreturn==true) {
        this.levelreturn=false;
        if(this.level==5||this.level==6) {
          this.score = this.score + 2
          this.checkindex = 1
          this.presentToast(this.level)
          this.level = this.level + 1
          setTimeout(() => {
            if(this.testarray.length==3){
              this.block99=true;
            }
          }, 1000)
          this.Bonus()
        }
        else {
          this.presentToast(this.level)
          this.level = this.level + 1

          this.block99=true;

        }
      }
      else {
        this.checkindex = 1
        setTimeout(() => {
          if (this.testarray.length == 3) {
            this.presentToast(this.level)
            this.level = this.level + 1
          }
          else {
            this.block99=true;

          }
        }, 1000)
      }
    }


    else
    {
      this.checklist=[]
      this.result = []

      this.resultarray.push({"Login ID":this.navParams.get("Login ID"), "time":this.calc(),"Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Lights On","attempt":this.attemptcount,"Level":this.level,"result":"F","Score":0})

      this.storage.set("performance_history",JSON.stringify(this.resultarray))

      if(this.level!=1 && this.levelreturn!=true)
      {
        if(this.attempt%3==0) {
          this.level = this.level - 1
          this.levelreturn = true;
        }

      }

      if(this.testarray.length !=0)
      {
        this.testarray=[]
      }


      // this.attempt=0;
      if (this.checkindex == 3)
      {
        this.checkindex=1
        this.result_numberr = ""
        this.result = []

        setTimeout(() => {
          this.block99=true;

          //this.startgame3();
        }, 1000)
        this.presentToast3()
      }

      else {
        this.checkindex = this.checkindex + 1;
        this.result_numberr = ""
        this.result = []
        setTimeout(() => {
          //   this.startgame3();
          this.block99=true;

        }, 1000)
        this.presentToast3()
      }

    }
    this.first1  = true;
    this.first2  = true;
    this.first3  = true;
    this.first4  = true;
    this.first5  = true;
    this.first6  = true;
    this.first7  = true;
    this.first8  = true;
    this.first9  = true;
    this.first10 = true;
    this.first11 = true;
    this.first12 = true;
    this.first13 = true;
    this.first14 = true;
  }
  mssatrt() {
    this.zone.run(()=> {
      this.seczo=setInterval(() => {
        if(this.timeup==true){
          clearInterval(this.seczo)
        }else {
          if (this.minuted >= 2) {
            this.miliseconddd = "00"
          } else {
            this.sect = this.sect + 1
            if (this.sect < 10) {
              this.miliseconddd = "0" + this.sect.toString();
            }
            else if (this.sect < 100) {
              this.miliseconddd = this.sect.toString();
            }
            else {
              this.miliseconddd = this.sect.toString().slice(-2);
            }
            if (this.sect == 100) {
              this.sect = 0;
            }
          }

        }
      },1)
    })

  }
  timerstart(){
    this.zone.run(()=>{
      var timy= setInterval(()=>
      {
        this.milisecond=this.milisecond+1;
        if(this.milisecond <10) {
          this.milisecondd = "0"+this.milisecond.toString();
        }
        else if(this.milisecond <100) {
          this.milisecondd = "00"+ this.milisecond.toString();
        }
        else {
          this.milisecondd =this.milisecond.toString();
        }
        if(this.milisecond %100==0){
          var cm=this.milisecond/100
          this.sec=this.sec+cm
          if(this.sec<10){
            this.secondcount="0"+this.sec.toString()
          }
          else {
            if(this.sec==60) {
              this.secondcount = '00'
            }
            else {
              this.secondcount=this.sec.toString()

            }

          }

          if(this.sec%60==0){

            var min=this.sec/60
            this.minuted=this.minuted+min
            this.minutecount=this.minuted.toString()
            if(this.minuted>=2){
              this.secondcount='00';
              clearInterval(timy)
              this.timeloose()
            }
            else {

            }
            if(this.minuted <10)
            {
              this.minutecount="0"+this.minutecount
            }
            else
            {
              this.minutecount = this.minutecount
            }
            this.sec=0
          }
          this.milisecond=0;

        }
      },1)
    })
  }
  presentToast(lebal) {
    if(lebal<6) {
      let toast = this.toastCtrl.create({
        message: "Level " + lebal + " is completed.",
        duration: 8000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
    else {
      let toast = this.toastCtrl.create({
        message: "Level one is completed.",
        duration: 5000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();

    }
  }
  Bonus() {
    let toast = this.toastCtrl.create({
      message: 'Got 2 as bonous.' ,
      duration: 5000,
      cssClass:'bonus',
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentToast1(num) {
    let toast = this.toastCtrl.create({
      message: 'which block is blinked number ' +num +'.' ,
      duration: 5000,
      cssClass:'bonus',

      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentToast3() {
    let toast = this.toastCtrl.create({
      message: 'Wrong answer' ,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentToast6() {
    let toast = this.toastCtrl.create({
      message: 'Well done !' ,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  attemptloose(){

    let alert = this.alertCtrl.create({
      title: 'You have attempted maximum 18 limit.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      /* {
        text: 'Restart',
        handler: () => {
          if(this.level>1){
            this.level=this.level-1;
            setTimeout(() => {

              this.minuted=0;
              this.minutecount='00';
              this.secondcount='00';
              this.milisecond=0
              this.miliseconddd='00';
              this.sect=0;
              this.milisecondd='0000';
              this.sec=0;
              this.attemptcpunt=[]
              this.testarray=[]
              this.startgame();
            }, 1000)

          }else {
            setTimeout(() => {

              this.minuted=0;
              this.minutecount='00';
              this.secondcount='00';
              this.milisecond=0
              this.miliseconddd='00';
              this.sect=0;
              this.milisecondd='0000';
              this.sec=0;
              this.attemptcpunt=[]
              this.testarray=[]
              this.startgame();
            }, 1000)

          }
          //this.check2(num)
          console.log('Buy clicked');
        }
      }
    ]*/
    });
    alert.present();
    this.gotohome()
  }
  timeloose(){clearInterval(this.timz)
    clearInterval(this.seczo)
    let alert = this.alertCtrl.create({
      title: "Time's up",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.secShow='00'

            console.log('Cancel clicked');
          }
        },
        {
          text: 'Restart',
          handler: () => {
            this.secShow='00'

            if(this.level>1){
              this.level=this.level-1;
              setTimeout(() => {
                this.timeup=false
                this.counter=0;
                this.minShow='02';
                this.minuted=0;
                this.minutecount='00';
                this.secondcount='00';
                this.milisecond=0
                this.miliseconddd='00';
                this.sect=0;
                this.milisecondd='0000';
                this.sec=0;
                this.attemptcpunt=[]
                this.testarray=[]
                this.startgame();
              }, 1000)

            }else {
              setTimeout(() => {
                this.timeup=false;
                this.counter=0;
                this.minShow='02';
                this.minuted=0;
                this.minutecount='00';
                this.secondcount='00';
                this.milisecond=0
                this.miliseconddd='00';
                this.sect=0;
                this.milisecondd='0000';
                this.sec=0;
                this.attemptcpunt=[]
                this.testarray=[]
                this.startgame();
              }, 1000)

            }
          }
        }
      ]
    });
    alert.present();
  }
  countdown(){
    setTimeout(()=>{
      this.minShow="01";

    },1500)

    //this.secShow='59'
    this.timz= setInterval(()=>{
      console.log(this.secarray[this.ytime])
      this.secShow=this.secarray[this.ytime]
      this.counter=this.counter+1
      if(this.ytime==59)
      {
        if(this.counter>119){


          this.timeloose()
          this.secShow='00'
          this.timeup=true;
          this.miliseconddd='00'

        }
        else {

        }

        this.ytime=0
        this.minShow="00";

      }
      else
      {
        this.ytime=this.ytime+1
      }


    },800)



  }

  gotohome() {
  this.navCtrl.setRoot(MaindashboardPage)}
  gotogame_2(){
   this.navCtrl.setRoot(Game10Page,{"result":this.resultarray,"score":this.score,"Login ID":this.navParams.get("Login ID")})
  }


}
