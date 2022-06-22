import { Component, VERSION } from '@angular/core';
import {ToastController} from'@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(){}
  resultado: Number;
  num1: string;
  num2: string;

  somar(){
    this.resultado=parseFloat(this.num1)+parseFloat(this.num2);
  }
  dividir(){
    if(parseFloat(this.num2)==0){}
      else{
        this.resultado=parseFloat(this.num1)/parseFloat
      }
  }
  
}
