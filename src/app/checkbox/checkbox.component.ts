import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
 
  public id: string;

  constructor() { 
    let rand = Math.random();
    rand = rand * 1000000;
    rand = Math.round(rand); //arrondi à l'entier le plus proche

    this.id = 'app-checkbox-' + rand;
  }





  ngOnInit(): void {
  }

}
