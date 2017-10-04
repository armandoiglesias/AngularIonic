import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.components.html',
})
export class TerminadosComponent implements OnInit {
  constructor(public listaDeseos:ListaDeseosService
    , private navController:NavController
  ) {  }

  ngOnInit() {
    //console.log(listaDeseos);
  }

  irAgregar(){
    this.navController.push(AgregarComponent);
  }

  verDetalle(lista, idx){
    this.navController.push(DetalleComponent, {
      lista: lista
      , idx:idx
    });
  }
}
