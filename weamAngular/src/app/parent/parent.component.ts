import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProduct } from '../SharedClassesAndTypes/Iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentProd:IProduct[]=[];
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngAfterViewInit()
  {
    this.child.SayWelcome();
  }
}