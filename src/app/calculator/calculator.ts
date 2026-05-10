import { Component } from '@angular/core';
import { LucideAngularModule, Delete } from 'lucide-angular';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  imports: [LucideAngularModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  readonly Delete = Delete;

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  symbols: string[] = ['+', '-', '*', '/'];
  displayValue: string = '';

  showValue(value: string | number) {
    this.displayValue += value;
  }

  delete(): void {
    this.displayValue = this.displayValue.slice(0, -1);
  }

  calculate() {
    this.displayValue = evaluate(this.displayValue);
    this.displayValue = this.displayValue.toString();
  }
}
