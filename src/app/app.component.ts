import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'enigma';
  showChild:boolean=true;

  showForm(){
    this.showChild=true;
  }
  hideForm(){
    this.showChild=false;
  }
}

