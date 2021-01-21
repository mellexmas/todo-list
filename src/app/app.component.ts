import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';


  public todoArray: Array<string> = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'toto',
  ];

  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      //const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
      //

      const $input: EventTarget | null = $event.target;

      if ($input instanceof HTMLInputElement) {
        console.log($input.value);
      }
      console.log("enter pressed");
      /*if ($input !== null) {
        console.log($input.value)
      }*/
      // console.log($event.target.value)
    }

  }

}
