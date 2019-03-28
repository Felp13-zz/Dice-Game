import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  lado1:string;
  lado2:string;
  lado3:string;
  lado4:string;
  lado5:string;
  lado6:string;
  dadoGif:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl: AlertController) {}

  jogar(){

    var sortear = Math.floor(Math.random() * 6 + 1);
    let resultado = parseInt(this.numeroEscolhido);
   

    switch(sortear){

      case 0:{
        this.dadoGif = (<HTMLInputElement>document.getElementById("gifdado")).src ="./assets/imgs/dadoGif.gif";
        break;
      }
      case 1:{
        this.lado1 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face1.png";
        break;
      }
        case 2:{
        this.lado2 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face2.png";
        break;
        }
        case 3:{
        this.lado3 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face3.png";
        break;
        }
        case 4:{
        this.lado4 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face4.png";
        break;
        }
        case 5:{
        this.lado5 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face5.png";
        break;
        }
        case 6:{
        this.lado6 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/face6.png";
        break;
        }
        default:{
          this.atencao(resultado.toString());
        break;
        }

    }

    /*Comparando o valor informado pelo usuário e o número randomico gerado.*/ 
    if(resultado == sortear)
    {
      this.ganhou(resultado.toString());
    }
    if((this.numeroEscolhido <= '0' || this.numeroEscolhido > '6' || Number.isNaN)){
      this.atencao(resultado.toString());
    }
    else{
      this.perdeu(resultado.toString());
    }

  }
  
  /*Função para dar dica ao usuário.*/
  atencao(valor: String){   
      let alert = this.alertCrtl.create({
        title: 'ATENÇÃO!',
        subTitle: `Se liga na dica abaixo:`,
        message: `Informe apenas números de 1 a 6. SIM para continuar
        ou NÃO para voltar a tela inicial.`,       
      buttons:[
        {
          text:'Sim',
          /*Evento para retornar a tela principal do jogo*/ 
          handler: () => {
            /*Refresh da page*/ 
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }  
          },
        {
          text:'Não',
          /*Evento para retornar a tela HOME do jogo*/
          handler: () => {
            /*Refresh da page*/ 
            this.navCtrl.setRoot(HomePage);
          }
        } 
      ]
    });
    alert.present();
  } 
  
  /*Função para informar ao usuário que ele acertou.*/    
  ganhou(valor: String){

    let alert = this.alertCrtl.create({
      title: 'Você acertou',
      subTitle: `Número da sorte: ${valor}`,
      message: `Miseravi, acertou! Quer jogar novamente?`,
    buttons:[
      {
      text:'Sim',
      /*Evento para retornar a tela principal do jogo*/ 
      handler: () => {
        /*Refresh da page*/ 
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }  
      },
    {
      text:'Não',
      /*Evento para retornar a tela HOME do jogo*/
      handler: () => {
        /*Refresh da page*/ 
        this.navCtrl.setRoot(HomePage);
      }
    } 
  ]
    });

  alert.present();
}

/*Função para informar ao usuário que ele errou.*/
perdeu(valor: String){

  let alert = this.alertCrtl.create({
    title: 'Você errou',
    subTitle: `Número do azar: ${valor}`,
    message: `A máquina te ganhou, eu não deixava. Quer jogar novamente?`,
  buttons:[
    {
      text:'Sim',
      /*Evento para retornar a tela principal do jogo*/
      handler: () => {
        /*Refresh da page*/ 
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }  
      },
    {
      text:'Não',
      /*Evento para retornar a tela HOME do jogo*/
      handler: () => {
        /*Refresh da page*/ 
        this.navCtrl.setRoot(HomePage);
      }
    } 
  ]
  });

alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
