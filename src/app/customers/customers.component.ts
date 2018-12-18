import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // testDataTwoWays="tes data binding dua arah";
  // testData:string="data binding satu arah";
  firstname:"firstname";
  lastname:"lastname";
  username:"username";
  constructor(private router:Router) { }
  showChild:boolean=true;

  ngOnInit() {
  }
 
  ok(){ //testData: 'halooo saya', -> jika variable langsung di isi
    this.router.navigate(['/test',{ nama:'luqni', firstname:this.firstname, lastname:this.lastname, username:this.username}]);
  }
  showdata(){
    this.showChild=true;
  }
  hidedata(){
    this.showChild=false;
  }
  //method untuk menangkap inputan dari child
  tangkap(event){
    this.showChild=event;
  }

}
