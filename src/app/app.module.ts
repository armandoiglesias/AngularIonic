import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';


//Servicios
import {ListaDeseosService} from './services/lista-deseos.services';

//Pipe
import { PlaceHolderPipe} from './pipes/placeholder.pipe';
import { PendientesPipe} from './pipes/pendientes.pipe';

@NgModule({
  declarations: [
    MyApp, PlaceHolderPipe,PendientesPipe,
    AboutPage,
    ContactPage,
    HomePage, PendientesComponent,TerminadosComponent,AgregarComponent, DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,PendientesComponent,TerminadosComponent,AgregarComponent,DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
