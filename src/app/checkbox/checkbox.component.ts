import { Component, Input, OnInit } from '@angular/core';

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



  @Input()
  public checked = false;
  //ce decorator decorate nous label attribute . add info for angular;
  //permet de dire que l'attribut que j'ai la je peux l'utiliser dans la balise html du web component qu'on crée
  //le @input ne peut etre mis que sur un attribut de classe il s'applique à l'élement en dessous
  @Input()
  public label: string | null = null;






  ngOnInit(): void {
  }

}
