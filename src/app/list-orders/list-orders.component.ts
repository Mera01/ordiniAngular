import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/orders%27').subscribe(response => {
    console.log("server response");
    console.log(response);
  })
}

}
