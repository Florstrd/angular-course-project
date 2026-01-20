import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})

export class Calculator {
  result: number = 0;
  num1: number = 0;
  num2: number = 0;

  add() {
    this.result = this.num1 + this.num2;
    this.num1 = this.result;
  }
  subtract() {
    this.result = this.num1 - this.num2;
    this.num1 = this.result;
  }
  multiply() {
    this.result = this.num1 * this.num2;
    this.num1 = this.result;
  }
  divide() {
    if (this.num2 === 0) {
      alert("Cannot divide by zero");
      return;
    }
    this.result = this.num1 / this.num2;
    this.num1 = this.result;
  }
  power() {
    this.result = Math.pow(this.num1, this.num2);
    this.num1 = this.result;
  }
  square() {
    this.result = Math.sqrt(this.num1);
    this.num1 = this.result;
  }
}
