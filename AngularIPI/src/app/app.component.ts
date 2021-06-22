import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type ="text" id="inputValue" [(ngModel)]="inputValue"><br>
  <span>span:{{inputValue}}</span><br>
  <button (click)="inputValue = ''">Clear</button>
  <button (click)="showAndHide()">{{this.display == true ? 'Cacher' : 'Afficher'}}</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularIPI';

  inputValue : string;

  display : boolean = true;

  showAndHide() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}
