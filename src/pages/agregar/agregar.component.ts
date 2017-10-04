import { Component, OnInit } from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import {ListaDeseosService} from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista : string="";
  nombreItem:string = "";

  items:ListaItem[] = [];


  constructor(public alertCtrl: AlertController
    , public navController:NavController
    , public listaDeseosService:ListaDeseosService
  ) {  }

  ngOnInit() {}

  agregar(){
    if (this.nombreItem.length == 0) {
        return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";
  }

  borrar(index:number){
    return this.items.splice(index,1) ;
  }

  guardarLista(){
    if (this.nombreLista.length == 0) {
      let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Se requiere nombre de la lista!',
      buttons: ['OK']
    });
    alert.present();
      return;

    }
    let lista = new Lista(this.nombreLista);
    lista.item = this.items;

    // this.listaDeseosService.listas.push(lista);
    this.listaDeseosService.agregarLista(lista);

    this.navController.pop();

  }

}
