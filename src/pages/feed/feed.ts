import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  // criacao de variavel
  public teste : String = "Hello World!"; 

  // criacao de funcao
  public testaFuncao():void {
    alert("Vamos aprender ionic");
  }

  // criacao de funcao com parametros
  public testaFuncaoComParametros(a:number, b:number):number {
    return(a + b);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    alert(this.testaFuncaoComParametros(3,4));
    console.log('ionViewDidLoad FeedPage');
  }

}
