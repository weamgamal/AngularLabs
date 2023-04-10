import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/Iproduct'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() childProd: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();
  sendProducts() {
    this.childProd.emit([
      { id: 1, name: 'Car1', quantity: 10, price: 15560, img: '/assets/download.jpg' },
      { id: 2, name: 'Car2', quantity: 15, price: 1060, img: '/assets/download.jpg' },
      { id: 3, name: 'Car3', quantity: 120, price: 10330, img: '/assets/download.jpg' },
    ]);
  }
  SayWelcome()
  {
    console.log("Hello im child")
  }
}