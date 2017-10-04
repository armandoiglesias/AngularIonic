import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx:number;
  lista:Lista;
  constructor(
    public navCtr:NavController
    , public navParam:NavParams
    , public listaDeseos:ListaDeseosService
    , public alertCtrl: AlertController
  ) {
    this.idx= this.navParam.get("idx");
    this.lista = this.navParam.get("lista");
   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;
    let todosMarcados = true;
    this.lista.item.map(x =>{
      if (!x.completado) {
        todosMarcados = false;
      }
    });
    this.lista.terminada = todosMarcados;
    this.listaDeseos.actualizarData();

  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: 'Confirmacion',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Cabcelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.listaDeseos.borrarLista(this.lista.nombre);
            this.navCtr.pop();
            // console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
