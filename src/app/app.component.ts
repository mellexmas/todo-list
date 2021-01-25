import { Component } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

 
  public todoArray: Array<TodoItem> = [];

  public get atLeastOneChecked(): boolean {
    for (const item of this.todoArray) {
      if (item.checked === true){
        return true;
      }
    }
    return false;
  }


  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      //const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

      const $input: EventTarget | null = $event.target;

      if ($input instanceof HTMLInputElement) {
        const str = $input.value.trim();

        if (str !== '') {
          this.todoArray.push({
            title: str,
            checked: false,
          });
          $input.value = '';
        }

      }
      console.log("enter pressed");
      /*if ($input !== null) {
        console.log($input.value)
      }*/
      // console.log($event.target.value)
    }

  }


  public removeItem(index: number): void {
    //$event:MouseEvent : pas utilisé alors on peut enlever et du html aussi
    //const index = this.todoArray.indexOf(item);//recupere l'index du 1er element trouvé
    // console.log(item);
    if (index !== -1) {
      this.todoArray.splice(index, 1); //enleve un ou pls elemts dans table index du 1er elem a suppr et le nb a suppr a partir de la
    }
  }
  /* public clickEvent() {
    console.log("j'ai récup le click");
    this.todoArray.pop();
  }*/

  public clearCompleted(): void {
    //console.log("click récupéré");
    //SOLUCE AYMERIC
    /* for (let i =0 ; i < this.todoArray.length -1; i > = 0 ; i--){
       //boucle à l'envers on part de la fin du tabeau comme ça les ID ne foirent pas
      if(this.todoArray[i].checked === true){
        this.todoArray.splice(i, 1);
      }
    } */
    //3eme méthode FILTER
    this.todoArray = this.todoArray.filter((item: TodoItem) => {
      return !item.checked;
      //return true if you want to keep the element in the new array
      //return false if you want to remove the element from the new array.
    })

  }


}
