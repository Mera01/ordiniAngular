import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../error-message.service';


@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  list : Array<any> = new Array();

  constructor(private httpClient: HttpClient , private  messageService : ErrorMessageService) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/orders').subscribe(response => {
      this.list = response as  Array<any>
    },
      responseError =>{
      this.messageService.error("errore ricerca ordini")
      })
}

}
