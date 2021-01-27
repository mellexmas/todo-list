import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  private static counter = 0;
  public id: string;
  //ce decorator decorate nous label attribute . add info for angular;
  //permet de dire que l'attribut que j'ai la je peux l'utiliser dans la balise html du web component qu'on crée
  @Input()
  public label: string|null= null;

  constructor() { 
    this.id = 'app-checkbox-' + CheckboxComponent.counter; //nom de classe.nomattribut
    CheckboxComponent.counter++;
  }





  ngOnInit(): void {
  }

}
