import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.white {
    color: white;
  }`]
})
export class AppComponent {
  visible = true;
  log = [];
  counter = 0;
  newStyle = 'white';
  newColor = false;

  toggleVisibility() {
    this.visible = !this.visible;
    this.counter = this.counter + 1;
    this.log.push(this.counter);
    this.newStyle = this.counter >= 5 ? 'blue' : 'white';
    this.newColor = this.counter >= 5 ? true : false;
  }
}
