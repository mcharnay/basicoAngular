import { Component } from "@angular/core";

//este es el componente
//linkea el html
@Component({
    selector: 'app-contador', //así se llama
    templateUrl: './contador.component.html',//especificar la dirección del archivo html.
    styleUrls: ['./contador.component.css'] //linkear archivo css
})

//definir la lógica del componente.
export class ContadorComponent{

}

//se llamará en app.component.html