import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  private static counter = 0;
  public id: string;

  constructor() { 
    this.id = 'app-checkbox-' + CheckboxComponent.counter; //nom de classe.nomattribut
    CheckboxComponent.counter++;
  }





  ngOnInit(): void {
  }

}
