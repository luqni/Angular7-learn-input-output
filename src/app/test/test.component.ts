import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'; 
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // a:number=1;
  // b:number=2;
  // testData:=a+b;
  @Input() PData: string;
  @Input() PData2: string;
  @Output() 
  tes : EventEmitter<boolean> = new EventEmitter<boolean>();

  data : "default";
  data2 : "default";
  data3:"default";
  data4:"default";
  data5:"default";
  testDataTwoWays="tes data binding dua arah";
  testData:string="data binding satu arah";
  constructor(private activatedRoute:ActivatedRoute) { } //dependency injection

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{
        this.data = params['testData'];
        this.data2 = params['nama'];
        this.data3 = params['firstname'];
        this.data4 = params['lastname'];
        this.data5 = params['username'];

      }
    )
  }
  testAlert(){
    this.testData=this.testDataTwoWays;
    alert(this.testDataTwoWays);
  }
  show(){
    this.tes.emit(true);
  }
  hide(){
    this.tes.emit(false);
  }

}
