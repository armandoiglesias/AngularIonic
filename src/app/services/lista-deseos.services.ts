import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];
  constructor() {
    // let lista1 = new Lista('Compras Supermercado');
    // let lista2 = new Lista('Juegos');
    // let lista3 = new Lista('Universidad');
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();

    console.log("listadeDeseos");
  }

  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas) )
  }

  cargarData(){
    if (localStorage.getItem("data")) {
        this.listas = JSON.parse(localStorage.getItem("data"));
    }

  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  borrarLista(nombre:string){
    this.listas = this.listas.filter(x => x.nombre != nombre);
    this.actualizarData();

  }

}
