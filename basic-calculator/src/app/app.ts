import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  title = 'Basic Calculator';
  displayValue: string = '0';

  appendValue(value: string): void {
    if (this.displayValue === '0') {
      this.displayValue = value;
    } else {
      this.displayValue += value;
    }
  }

  clear(): void {
    this.displayValue = '0';
  }

  calculate(): void {
    try {
      const result = this.safeEvaluate(this.displayValue);
      this.displayValue = result.toString();
    } catch {
      this.displayValue = 'Error';
    }
  }

  private safeEvaluate(expr: string): number {
    // Only allow numbers, operators, and parentheses
    if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
      throw new Error('Invalid expression');
    }
    
    // Remove spaces
    expr = expr.replace(/\s/g, '');
    
    // Simple math parser
    let pos = 0;
    
    const parseNumber = (): number => {
      let num = '';
      while (pos < expr.length && /[0-9.]/.test(expr[pos])) {
        num += expr[pos++];
      }
      if (num === '') {
        throw new Error('Invalid number');
      }
      return parseFloat(num);
    };
    
    const parseFactor = (): number => {
      if (expr[pos] === '(') {
        pos++;
        const result = parseExpression();
        pos++; // skip ')'
        return result;
      }
      return parseNumber();
    };
    
    const parseTerm = (): number => {
      let result = parseFactor();
      while (pos < expr.length && (expr[pos] === '*' || expr[pos] === '/')) {
        const op = expr[pos++];
        result = op === '*' ? result * parseFactor() : result / parseFactor();
      }
      return result;
    };
    
    const parseExpression = (): number => {
      let result = parseTerm();
      while (pos < expr.length && (expr[pos] === '+' || expr[pos] === '-')) {
        const op = expr[pos++];
        result = op === '+' ? result + parseTerm() : result - parseTerm();
      }
      return result;
    };
    
    return parseExpression();
  }
}