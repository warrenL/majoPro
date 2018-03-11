import { Component } from '@angular/core';

/**
 * The controller class for tab bar.
 *
 */
@Component({
  selector: 'tabs-bar',
  templateUrl: 'tabs-bar.html'
})
export class TabsBarComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
