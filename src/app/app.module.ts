import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importar app-contador, se pone dentro de declarations
import { ContadorComponent } from './contador/contador.component';
import { Contador2Component } from './contador2/contador2.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BlucesComponent } from './bluces/bluces.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    Contador2Component,
    BotonesComponent,
    FormularioComponent,
    BlucesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3Component,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent,
    //ContadorComponent se creará manualmente poniendo en el cmd: ng generate component contador2 o ng g c contador2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
