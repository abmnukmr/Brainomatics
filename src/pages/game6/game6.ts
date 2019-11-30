import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Game1Page} from "../game1/game1";
import {Ng2CsvService} from "ng2csv";
import { Game4Page } from '../game4/game4';
import { Game3Page } from '../game3/game3';
import { Game2Page } from '../game2/game2';
import { Game5Page } from '../game5/game5';
import { Game7Page } from '../game7/game7';

import {MaindashboardPage} from "../maindashboard/maindashboard";
import { Storage } from '@ionic/storage';
import { t } from '@angular/core/src/render3';
/**
 * Generated class for the Game6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game6',
  templateUrl: 'game6.html',
})
export class Game6Page {


  Sgame:number=0
  s11:boolean=false;
  s12:boolean=false;
  s13:boolean=false;
  s14:boolean=false;
  s15:boolean=false;
  s16:boolean=false;
  

  _blockarray=[]
  break:boolean=true;
  internv:any;
  fort:any;
  crackchech:any;
  checkswitch:boolean=false;
  crack1:boolean=false;
  crack2:boolean=false;
  crack3:boolean=false;
  crack4:boolean=false;
  crack5:boolean=false;
  crack6:boolean=false;
  crack7:boolean=false;
  crack8:boolean=false;
  res_result:any;
  res_checklist:any;
  counter:number=0
  timz:any;
  seczo:any;
  timeup:boolean=false;
  ms: any;
  checklist:any=[]
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
  block9:boolean=false
  block10:boolean=false
  block11:boolean=false
  block12:boolean=false
  block99:boolean=false
  nine:boolean=true;
  zero:boolean=true;
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
  eightt:boolean=true;
  score:number=0;
  level:number=1;
  checkattempt:number=0;
  attempt:number=0;
  result:any=[]
  checkindex:number=1;
  index_number:number;
  result_number:number;
  result_numberr:string=""
  gamename:any="Peeping cuckoo joint";
  game1:boolean=false;
  blockarray=[]
  numarray=[]
  minShow:string='02';
  secShow:string='00';
  levelreturn:boolean=false;
  resultarray:any=[]
  levelreturncount:number=0;
  attemptcount:number=0;
  getcount:number=0;
  repeatshow:boolean=false;
  game4array=[1,2,3,4]
  game6array=[1,2,3,4,5,6]
  secarray:any=['00','59','58','57','56','55', '54', '53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','09','08','07','06','05','04','03','02','01']
  Games:any=
    [ {"name":"Game 01","page":Game1Page,"icon":"ios-unlock","color":"primary"},
      {"name":"Game 02","page":Game2Page,"icon":"ios-unlock","color":"primary"},
      {"name":"Game 03","page":Game3Page,"icon":"ios-unlock","color":"primary"},
      {"name":"Game 04","page":Game4Page,"icon":"ios-unlock","color":"primary"},
      {"name":"Game 05","page":Game5Page,"icon":"ios-unlock","color":"primary"},
      {"name":"Game 06","page":Game6Page,"icon":"ios-unlock","color":"secondary"},
      {"name":"Game 07","icon":"lock","color":"white"},
      {"name":"Game 08","icon":"lock","color":"white"},
      {"name":"Game 09","icon":"lock","color":"white"},
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

   
  check4:boolean=false;
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
                        this.block10=true
                        setTimeout(()=>{
                          this.block11=true
                          setTimeout(()=>{
                            this.block9=true
                            this.block12=true
                          },500)
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
  
  goto(){
    setTimeout( ()=>{
    var blk = this.randomIntFromInterval(1,4)
    this.block = Number.parseInt(blk.toString())
    var colo = this.block.toString();
    this.blockarray.push(colo)
    this.Strnumber = this.block.toString()
    
  },100)

  } 
 
 checkresult(n){
   // if(this.block9==false) {
      switch (n.toString()) {
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
        
      }
      this.checklist.unshift(n)
      ///// alert(this.checklist)
      this.res_checklist = this.checklist.join()
      if (this.result.length == this.checklist.length) {
        setTimeout(()=>{
          this.check()
        },500)
      }
      else {

      }
   // }
  }
  ionViewDidEnter(){
    this.resultarray=this.navParams.get("result");
    this.score=this.navParams.get("score");
  }
  gameon()
  {
    
  }
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }


game_(n)
{
  this.game4array=[1,2,3,4]
  this.block9=false;
  this.game4array.sort((a, b)=>{return 0.5 - Math.random()});
  var _index = this.randomIntFromInterval(0,3)
  var _number = this.game4array[_index]
  this.result.unshift(_number)
  this.game4array.splice(_index, 0, _number);
    if(n>1){
      for(let i=0;i<n-1;i++){
        var O_number = this.randomIntFromInterval(1,4)
        while(this.game4array[this.game4array.length-1]==O_number){
          O_number = this.randomIntFromInterval(1,4)
        } 
        this.game4array.push(O_number);
        //this.result.unshift(_number)
      }
    }
    for(let k=0;k<this.game4array.length;k++){
    setTimeout(()=>{
      this.blinknest(k,this.game4array[k])
      this.audioplay()
    },k*2500)
  }
  setTimeout(()=>{
    this.check4=true;
    this.repeatshow=true;
    this.mssatrt()
    this.countdown();
  },this.game4array.length*2500)


}

game_3()
{  
  this.game4array=[1,2,3,4]
  this.block9=false;
  this.game4array.sort((a, b)=>{return 0.5 - Math.random()});
  var _index = this.randomIntFromInterval(0,3)
  var _number = this.game4array[_index]
  this.game4array.splice(_index, 0, _number);
  this.result.unshift(_number)
    var O_number = this.randomIntFromInterval(1,4)
    while(this.game4array[this.game4array.length-1]==O_number){
      O_number = this.randomIntFromInterval(1,4)
    } 
    this.game4array.push(O_number);
    
    var n_number = this.randomIntFromInterval(1,4)

    while(n_number==_number)
    {
      var n_number = this.randomIntFromInterval(1,4)
    }
    var i_nd=this.game4array.indexOf(n_number)
    this.game4array.splice(i_nd, 0, n_number);
    this.result.unshift(n_number)
   // /// alert(this.result)
    var OO_number = this.randomIntFromInterval(1,4)
    while(this.game4array[this.game4array.length-1]==OO_number){
      OO_number = this.randomIntFromInterval(1,4)
    } 
    this.game4array.push(OO_number);
    //  /// alert(this.result)

  for(let k=0;k<this.game4array.length;k++){
    setTimeout(()=>{
      this.blinknest(k,this.game4array[k])
      this.audioplay()
    },k*2500)
  }
  setTimeout(()=>{
    this.check4=true;
    this.repeatshow=true;
    this.mssatrt()
    this.countdown();
  },this.game4array.length*2700)
}



game_4()
{
  this.game6array=[1,2,3,4,5,6]
  this.block9=false;
  this.game6array.sort((a, b)=>{return 0.5 - Math.random()});
  var _index = this.randomIntFromInterval(0,5)
  var _number = this.game6array[_index]
  this.game6array.splice(_index, 0, _number);
  this.result.unshift(_number)
    var O_number = this.randomIntFromInterval(1,6)
    while(this.game6array[this.game6array.length-1]==O_number){
      O_number = this.randomIntFromInterval(1,6)
    } 
    this.game6array.push(O_number);
    
    var n_number = this.randomIntFromInterval(1,6)

    while(n_number==_number)
    {
      var n_number = this.randomIntFromInterval(1,6)
    }
    var i_nd=this.game6array.indexOf(n_number)

    this.game6array.splice(i_nd, 0, n_number);
    this.result.unshift(n_number)
   // /// alert(this.result)



     
  // /// alert(this.game6array)

  for(let k=0;k<this.game6array.length;k++){
    setTimeout(()=>{
      this.blinknest(k,this.game6array[k])
      this.audioplay()
    },k*2500)
  }
  setTimeout(()=>{
    this.check4=true;
    this.repeatshow=true;
    this.mssatrt()
    this.countdown();
  },this.game6array.length*2700)
}



game_5()
{
  this.game6array=[1,2,3,4,5,6]
  this.block9=false;
  this.game6array.sort((a, b)=>{return 0.5 - Math.random()});
  var _index = this.randomIntFromInterval(0,5)
  var _number = this.game6array[_index]
  this.game6array.splice(_index, 0, _number);
  this.result.unshift(_number)
    var O_number = this.randomIntFromInterval(1,6)
    while(this.game6array[this.game6array.length-1]==O_number){
      O_number = this.randomIntFromInterval(1,6)
    } 
    this.game6array.push(O_number);
    
    var n_number = this.randomIntFromInterval(1,6)

    while(n_number==_number)
    {
      var n_number = this.randomIntFromInterval(1,6)
    }
    var i_nd=this.game6array.indexOf(n_number)

    this.game6array.splice(i_nd, 0, n_number);
    var O5_number = this.randomIntFromInterval(1,6)
    while(this.game6array[this.game6array.length-1]==O5_number){
      O5_number = this.randomIntFromInterval(1,6)
    } 
    this.game6array.push(O5_number);

    
    this.result.unshift(n_number)


    var n5_number = this.randomIntFromInterval(1,6)

    while(n5_number==this.result[this.result.length-1])
    {
      var n5_number = this.randomIntFromInterval(1,6)
    }
    var i5_nd=this.game6array.indexOf(n5_number)
    this.game6array.splice(i5_nd, 0, n5_number);
    this.result.unshift(n5_number)
    
   // /// alert(this.result)



     
   /// alert(this.game6array)

  for(let k=0;k<this.game6array.length;k++){
    setTimeout(()=>{
      this.blinknest(k,this.game6array[k])
      this.audioplay()
    },k*2500)
  }
  setTimeout(()=>{
    this.check4=true;
    this.repeatshow=true;
    this.mssatrt()
    this.countdown();
  },this.game6array.length*2700)
}


game_6()
{
  this.game6array=[1,2,3,4,5,6]
  this.block9=false;
  this.game6array.sort((a, b)=>{return 0.5 - Math.random()});
  var _index = this.randomIntFromInterval(0,5)
  var _number = this.game6array[_index]
  this.game6array.splice(_index, 0, _number);
  this.result.unshift(_number)
    var O_number = this.randomIntFromInterval(1,6)
    while(this.game6array[this.game6array.length-1]==O_number){
      O_number = this.randomIntFromInterval(1,6)
    } 
    this.game6array.push(O_number);
    
    var n_number = this.randomIntFromInterval(1,6)

    while(n_number==_number)
    {
      var n_number = this.randomIntFromInterval(1,6)
    }
    var i_nd=this.game6array.indexOf(n_number)

    this.game6array.splice(i_nd, 0, n_number);
    var O5_number = this.randomIntFromInterval(1,6)
    while(this.game6array[this.game6array.length-1]==O5_number){
      O5_number = this.randomIntFromInterval(1,6)
    } 
    this.game6array.push(O5_number);

    
    this.result.unshift(n_number)


    var n5_number = this.randomIntFromInterval(1,6)

    while(n5_number==this.result[this.result.length-1])
    {
      var n5_number = this.randomIntFromInterval(1,6)
    }
    var i5_nd=this.game6array.indexOf(n5_number)
    this.game6array.splice(i5_nd, 0, n5_number);
    
    this.result.unshift(n5_number)
    
   // /// alert(this.result)


   var n6_number = this.randomIntFromInterval(1,6)

   while(n6_number==this.game6array[this.game6array.length-1])
   {
     var n6_number = this.randomIntFromInterval(1,6)
   }
   this.game6array.push(n6_number);
   


   

     
   /// /// alert(this.game6array)

  for(let k=0;k<this.game6array.length;k++){
    setTimeout(()=>{
      this.blinknest(k,this.game6array[k])
      this.audioplay()
    },k*2500)
  }
  setTimeout(()=>{
    this.check4=true;
    this.repeatshow=true;
    this.mssatrt()
    this.countdown();
  },this.game6array.length*2700)
}




blinkcase(k){
  switch(k.toString())
  {
    case "1":
      this.s11=true
      break;
    case "2":
      this.s12=true
      break;
    case "3":
      this.s13=true
      break;
    case "4":
     this.s14=true
      break;
    case "5":
    this.s15=true
      break;
    case "6":
    this.s16=true
    break;
  }
}


blinknest(n,k){
  switch(Number.parseInt(n.toString()))
    {
      case 0:
      this.Sgame=1
      this.blinkcase(k)
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;
        },2000)
        break;
      
      case 1:
      this.Sgame=2
      this.blinkcase(k)
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;
        },2000)
        break;
      
      case 2:
      this.Sgame=3
      this.blinkcase(k)
       setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;
        },2000)
        break;
      
      case 3:
        this.Sgame=4
        this.blinkcase(k)
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;
        },2000)
        break;
      
      //break
      case 4:
      this.Sgame=5
      
      this.blinkcase(k)
      setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      //break
      case 5:
      this.Sgame=6
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      case 6:
      this.Sgame=7
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      case 7:
      this.Sgame=8
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
     // break
      case 8:
      this.Sgame=9
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      //break
      case 9:
      this.Sgame=10
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      //break
      case 10:
      this.Sgame=11
      this.blinkcase(k)
      
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
       break;
      
     // break;
      case 11:
      this.Sgame=12
      this.blinkcase(k)
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
      case 12:
      this.Sgame=13
      this.blinkcase(k)
        setTimeout(()=>{
          this.s11=false;
          this.s12=false;
          this.s13=false;
          this.s14=false;
          this.s15=false;
          this.s16=false;

        },2000)
        break;
      
    }
}



  level4(num) {
    this.level=num
    this.number=null;
    this.gamestart1=false;
  }
  startgame(){
    this.check4=false;
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
      //this.countdown();
      //this.mssatrt()
      this.result_numberr = ""
      switch (this.level) {
        case 1:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.game_(1)
          break;
        case 2:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         this.game_(2)
          break;
        case 3:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.game_3()
          //this.gamestart3()
          break;
        case 4:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.game_4()
          //this.gamestart4()
          break;
        case 5:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.game_5()
         // this.gamestart5()
          break;
        case 6:
          this.game4array=[1,2,3,4]
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
          this.game_6()
         // this.gamestart6()
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
         // this.agamestart()
          break;
        case 2:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         // this.gamestart2()
          break;
        case 3:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         // this.gamestart3()
          break;
        case 4:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         // this.gamestart4()
          break;   
        case 5:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         // this.gamestart5()
          break;
        case 6:
          this.blockarray = []
          this.numarray = []
          this.Strnumber = ""
          this.result = []
         // this.gamestart6()
          break;
      }
    }
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

  

   chekArraySimilar(array1, array2)
   {
     var checkStatus
     var count=0
     for(let i=0;i<array1.length;i++)
        {
            if(array1.indexOf(array2[i])!=-1){
              count=count+1
            }
        } 
        if(count==array1.length){
          checkStatus=true
        }  
        else{
          checkStatus=false
        }

        return checkStatus
     
   }
  check() {
    this.attemptcount=this.attemptcount+1
    this.repeatshow=false;
    clearInterval(this.timz)
    clearInterval(this.seczo)
    this.attemptcpunt.push("1")
    var d = new Date()
    var month = d.getMonth()+1
    this.d_result.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint", "Level":this.level,"Attempt":this.attemptcpunt.length,"Score":this.score,"TimeTaken":this.secShow})
    this.storage.set("game_history",JSON.stringify(this.d_result))
    var er = this.result[this.index_number]
    var blk = this.checklist.join().toString();
    this.res_result=this.result.join().toString();
    // /// alert(this.res_result +"===="+blk)
    var res=this.result.reverse().join().toString();
    
    if(this.chekArraySimilar(this.result,this.checklist)==true)
    {
      this.block9=true
      this.testarray.push(1)
      this.result_numberr = ""
      this.checklist=[]
      this.result = []
      this.check4=false;
      this.attempt = this.attempt + 1
      
      if(this.levelreturn==true){
        this.score = this.score + 1;
        this.attempt = this.attempt - 1
        this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":1})
        this.storage.set("performance_history",JSON.stringify(this.resultarray))
      }
      else {
      
      if(this.level==5||this.level==6) {
        if (this.attempt%3==0) {
          this.resultarray.push({
            "Login ID": this.navParams.get("Login ID"),
            "time":this.calc(),
            "Date": d.getDate() + "-" + month + "-" + d.getFullYear(),
            "Game Name": "Peeping cuckoo joint",
            "attempt": this.attemptcount,
            "Level": this.level,
            "result": "S",
            "Score": 4
          })
          this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":4})

          this.block99 = true;
          this.Bonus()
          this.attemptcount=this.attemptcount+1
          this.storage.set("performance_history", JSON.stringify(this.resultarray))

          if (this.level == 6 && this.attempt % 6 == 0) {


            let a = new Audio();
            a.src = 'assets/audio/applause.mp3';
            a.play();
            this.gotogame()
          }
        }

        else {
          this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month +"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":2})
          this.storage.set("performance_history",JSON.stringify(this.resultarray))

        }

      }
      else {

        this.score = this.score + 2;
        this.resultarray.push({"Login ID":this.navParams.get("Login ID"),"time":this.calc(), "Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint","attempt":this.attemptcount,"Level":this.level,"result":"S","Score":2})
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
      this.check4=false;
      this.block9=true;
      this.resultarray.push({"Login ID":this.navParams.get("Login ID"), "time":this.calc(),"Date":d.getDate()+"-"+month+"-"+d.getFullYear(),"Game Name":"Peeping cuckoo joint","attempt":this.attemptcount,"Level":this.level,"result":"F","Score":0})

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
    
    this.first1 = true;
    this.first2 = true;
    this.first3 = true;
    this.first4 = true;
    this.first5 = true;
    this.first6 = true;
    this.first7 = true;
    this.eightt = true;
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

   
  audioplay() {
    ///// alert("Play")
    let a = new Audio();
    a.src = 'assets/audio/cuckoo6.mp3';
    a.play()
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
           //   this.timeloose()
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

    });
    alert.present();
    this.gotohome()
  }
  timeloose(){
    clearInterval(this.timz)
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


          //this.timeloose()
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



  gotogame(){
    this.navCtrl.setRoot(Game7Page,{"result":this.resultarray,"score":this.score,"Login ID":this.navParams.get("Login ID")})
   }
}
