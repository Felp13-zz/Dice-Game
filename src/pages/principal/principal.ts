import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  numeroEscolhido:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl: AlertController) {
  }

  jogar(){
    var sortear = Math.floor(Math.random() * 6 + 1);

    switch(sortear){

      case 1:{
        var lado1 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face1.png";    
        break; 
      }
        case 2:{
        var lado2 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face2.png"; 
        break;
        }
        case 3:{
        var lado3 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face3.png"; 
        break;
        }
        case 4:{
        var lado4 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face4.png"; 
        break;
        }
        case 5:{
        var lado5 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face5.png"; 
        break;
        }
        case 6:{
        var lado6 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face6.png"; 
        break;
        }       
        default:{
          alert("Escolha um número de 1 a 6!");
        break;
        }

    }
  
    let resultado = parseInt(this.numeroEscolhido)

    if(resultado == sortear)
    {    
      this.ganhou(resultado.toString()); 
    }
    else{
      this.perdeu(resultado.toString());
    }
    
  }

  ganhou(valor: String){
    
    let alert = this.alertCrtl.create({
    title: 'Resultado',
    subTitle: `Parabéns, você acertou!: ${valor}`,
    buttons:['Ok']
    });

  alert.present();
}

perdeu(valor: String){
    
  let alert = this.alertCrtl.create({
  title: 'Resultado',
  subTitle: `Você errou, tente novamente!: ${valor}`,
  buttons:['Ok']
  });

alert.present();
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
