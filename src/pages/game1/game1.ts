import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Game1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game1',
  templateUrl: 'game1.html',
})
export class Game1Page {

  number:number;
  block:number;
  level:any=1;
  gamestart1:boolean=false;
  @ViewChild('first') first: ElementRef;
  @ViewChild('second') second: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  @ViewChild('five') five: ElementRef;
  @ViewChild('six') six: ElementRef;
  @ViewChild('seven') seven: ElementRef;
  @ViewChild('eight') eight: ElementRef;

  result:any=[]

  index_number:number;
  result_number:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
  //  console.log('ionViewDidLoad Game1Page');

  }


   goto(){


     var blk=Math.random() * 10

     this.block=Number.parseInt( blk.toString())

   //  alert(this.block)

     if(this.block==0) this.block=+1

     var num=Math.random() * 10

     this.number=Number.parseInt(num.toString())

     //alert(this.number+"number")

     this.result.push({"block":this.block,"number_res":this.number})

     var colo=this.block.toString()
  //   alert(colo+"colo")
     switch(colo)
     {
       case "9":
    //     alert("9")
         this.first.nativeElement.style.background="#cb1b58"
             break;
       case "1":
      //   alert("1")
         this.first.nativeElement.style.background="#cb1b58"
         break;
       case "2":
        // alert("2")
         this.second.nativeElement.style.background="#cb1b58"
         break;
       case "3":
         //alert("3")
         this.three.nativeElement.style.background="#cb1b58"
         break;
       case "4":
        // alert("4")
         this.four.nativeElement.style.background="#cb1b58"
         break;
       case "5":
         //alert("5")
         this.five.nativeElement.style.background="#cb1b58"
         break;
       case "6":
         //alert("6")
         this.six.nativeElement.style.background="#cb1b58"
         break;
       case "7":
         //alert("7")
         this.seven.nativeElement.style.background="#cb1b58"
         break;
       case "8":
         //alert("8")
         this.eight.nativeElement.style.background="#cb1b58"
         break;
     }


    // this.audioplay(this.number.toString())
  }



  gamestart()
  {
   this.gamestart1=true;



   this.goto()

    let b = new Audio();
    b.src = 'assets/audio/button-2.mp3';
    b.play()

    setTimeout(() => {


      this.first.nativeElement.style.background = "#ffffff"
      this.first.nativeElement.style.background = "#ffffff"
      this.second.nativeElement.style.background = "#ffffff"
      this.three.nativeElement.style.background = "#ffffff"
      this.four.nativeElement.style.background = "#ffffff"
      this.five.nativeElement.style.background = "#ffffff"
      this.six.nativeElement.style.background = "#ffffff"
      this.seven.nativeElement.style.background = "#ffffff"
      this.eight.nativeElement.style.background = "#ffffff"

    },1000)



    setTimeout(() => {
        this.goto()


      let a = new Audio();
      a.src = 'assets/audio/button-1.mp3';
      a.play()






      }, 1000)





    setTimeout(() => {


      this.first.nativeElement.style.background = "#ffffff"
      this.first.nativeElement.style.background = "#ffffff"
      this.second.nativeElement.style.background = "#ffffff"
      this.three.nativeElement.style.background = "#ffffff"
      this.four.nativeElement.style.background = "#ffffff"
      this.five.nativeElement.style.background = "#ffffff"
      this.six.nativeElement.style.background = "#ffffff"
      this.seven.nativeElement.style.background = "#ffffff"
      this.eight.nativeElement.style.background = "#ffffff"

    },2000)



  var ct=Math.random()+0.5

    this.index_number=Number.parseInt(ct.toString())

    //alert("result"+JSON.stringify(this.result)+"index"+this.index_number)
    let  er =this.result[this.index_number]
    this.result_number=er.number_res
    //this.index_number=Math.random()*1 +0.5;
   // this.number=this.result[this.index_number].number
  //  this.block=this.result[this.index_number].block





  }





audioplay(number) {

alert("Audio"+number)

  switch(number)
  {
    case "9":
      {
        let a = new Audio();
        a.src = 'assets/audio/button-1.mp3';
        a.play()

        break;
       }
    case "1":
      {
        let a = new Audio();
        a.src = 'assets/audio/button-1.mp3';
        a.play()


        break;
      }
    case "2":
    {
      let a = new Audio();
      a.src = 'assets/audio/button-2.mp3';
      a.play()


      break;
    }
    case "3":
    {
      let a = new Audio();
      a.src = 'assets/audio/button-3.mp3';
      a.play()

      break;
    }

    case "4":
    {

      let a = new Audio();
      a.src = 'assets/audio/button-4.mp3';
      a.play()

      break;
    }
    case "5":

    {
      let a = new Audio();
      a.src = 'assets/audio/button-5.mp3';
      a.play()

      break;
    }

    case "6":
    {

      let a = new Audio();
      a.src = 'assets/audio/button-6.mp3';
      a.play()

      break;
    }
    case "7":
    {
      let a = new Audio();
      a.src = 'assets/audio/button-7.mp3';
      a.play()

      break;
    }

    case "8":
    {
      let a = new Audio();
      a.src = 'assets/audio/button-8.mp3';
      a.play()

      break;
    }


  }


}


gamecheck1()

  {




  }



  gamecheck2(){
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Do you want to buy this book?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Buy',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();

  }





}
