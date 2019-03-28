import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCrtl: AlertController) {}

  /*Método de acesso para Página Principal*/
  openPrincipal(){
    this.navCtrl.push(PrincipalPage);
    
  }

  sobre(valor: String){
    
    let alert = this.alertCrtl.create({
    title: 'Jogo de Dados',
    subTitle: `Desenvolvedor: Felipe Severo`,
    message:'Atividade realizada para fixação dos conceitos ensinados sobre Ionic3 na disciplina de Dispositivos Móveis.',
    buttons:['Ok']
    });
    alert.present();
  }

}
