  import { Component } from '@angular/core';
  import { Persona } from '../persona';

@Component({
  selector: 'app-contador2',
  templateUrl: './contador2.component.html',
  styleUrls: ['./contador2.component.css']
})
export class Contador2Component {

  constructor(){}

  ngOnInit(): void{

  }


  //objeto, usa la interfaz Persona (persona.ts)
  /*
  persona:Persona = {
    nombre : 'Michel Charnay',
    edad: 32,

  };
  */

  numero: number = 1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }
  
}
