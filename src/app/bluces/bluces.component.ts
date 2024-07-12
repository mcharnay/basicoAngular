import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bluces',
  templateUrl: './bluces.component.html',
  styleUrls: ['./bluces.component.css']
})
export class BlucesComponent {

  //llama la interfaz para hacer un for
personas: Persona[]=[
  {nombre:'Michel', edad: 32},
  {nombre:'Karin', edad: 12},
  {nombre:'Momo', edad: 5},
  {nombre:'kuki', edad: 15},
];

}
