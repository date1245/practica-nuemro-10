import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  color = 'white';     // color del texto
  boxColor = 'red';    // color del cubo

  cambiarColor() {
    this.color = this.color === 'white' ? 'red' : 'white';
  }

  toggleColor() {
    this.boxColor = this.boxColor === 'red' ? 'white' : 'red';
  }
}
