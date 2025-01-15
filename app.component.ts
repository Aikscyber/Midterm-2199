import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  testArray = [1,2,3,4,5,6];
  testObject = {
    name: 'Aiko Ocampo',
    age: 21,
    favefood: 'Chicken'
  }
  title = 'ng-pipes-demo';
  presentDate = new Date(); 
  time$ = interval(1000).pipe(map(() => new Date()));
  price = 100; 
  Fruits = ['Apple', 'Orange', 'Mango','Grapes','Strawberry'];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

}

@Component({
  selector: 'app-test',
  template: '<p>Test Component</p>'
})
export class TestComponent implements OnInit {
  price : number = 20000;
  Fruits = ['Apple', 'Banana', 'Orange', 'Mango','Grapes,','Kiwi', 'Strawberry'];ngOnInit(){}
}


