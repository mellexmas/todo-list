import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-array-size',
  templateUrl: './array-size.component.html',
  styleUrls: ['./array-size.component.scss']
})
export class ArraySizeComponent implements OnInit {
//pour que mon public array soit dispo dans le html je mets @input
@Input()
public array: Array<any>= [];
  

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
