import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  //para acceder a los datos del servicio
  constructor(public messagesService: MessagesService){}

}
