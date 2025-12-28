# Angular Basic Calculator - Capstone Project B

## Project Overview
A fully functional Basic Calculator application built using Angular framework with standalone components. This project demonstrates core Angular concepts including component architecture, template-driven forms, two-way data binding, and responsive UI design with Bootstrap.

## Technologies Used
- **Angular**: v17+ (Standalone Components)
- **Bootstrap**: v5.3
- **TypeScript**: v5.0+
- **HTML5/CSS3**
- **FormsModule**: For Template Driven Forms

## Features Implemented
- ✅ Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)
- ✅ Clean and responsive user interface
- ✅ Error handling for invalid expressions
- ✅ Clear functionality to reset calculator
- ✅ Real-time display updates using two-way data binding
- ✅ Professional styling with Bootstrap and custom CSS
- ✅ Default value of 0 on application load

## Angular Concepts Applied

### 1. AppComponent (Single Component Architecture)
- Entire application runs within a single standalone component
- All logic and UI contained in `app.ts`, `app.html`, and `app.css`

### 2. Template Driven Form (TDF)
- Form implemented using Angular's FormsModule
- Input field wrapped in `<form>` element with proper form controls

### 3. Two-Way Data Binding
- `[(ngModel)]` directive used for binding `displayValue` property
- Real-time synchronization between component and template

### 4. Component Properties
- `title`: Stores calculator title
- `displayValue`: Stores current display value (initialized to '0')

### 5. Control Statements
- `*ngFor` directive used to iterate through button rows and columns
- `*ngIf` conditions within template for dynamic rendering
- `[ngClass]` for conditional CSS class application

### 6. HTML & Custom CSS
- Semantic HTML5 structure
- Custom CSS with responsive design
- Professional styling with shadows and spacing

### 7. Bootstrap Classes
- Grid system: `container`, `mt-5`
- Components: `card`, `shadow`, `p-4`, `btn`, `form-control`
- Utilities: `text-center`, `text-primary`, `mb-3`, `text-end`, `w-100`
- Table: `table`, `table-bordered`, `text-center`

## Screenshots

Added in the screenshots folder

## Project Structure
```
Angular-Project-Submission/
├── src/
│   ├── app/
│   │   ├── app.ts              # Component logic (standalone)
│   │   ├── app.html            # Component template
│   │   └── app.css             # Component styles
│   ├── main.ts                 # Application bootstrap
│   └── index.html              # Main HTML file
├── screenshots/
│   ├── calculator-initial.png
│   ├── calculator-input.png
│   └── calculator-result.png
├── package.json
├── angular.json
└── README.md
```

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/rooman-mir/Angular-Project-Rooman.git
cd Angular-Project-Rooman
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
ng serve
```

4. Open in browser: Navigate to http://localhost:4200

## Source Code Files

### 1. main.ts
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
```

### 2. app.ts (Component Logic)
```typescript
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
      this.displayValue = eval(this.displayValue).toString();
    } catch {
      this.displayValue = 'Error';
    }
  }
}
```

## Implementation Details

### AppComponent (app.ts)
The main component uses standalone architecture with:
- **Imports**: CommonModule and FormsModule for directives and two-way binding
- **Properties**: 
  - `title`: Calculator heading
  - `displayValue`: Current display value (default: '0')
- **Methods**:
  - `appendValue(value: string)`: Appends clicked button value to display
  - `clear()`: Resets display to '0'
  - `calculate()`: Evaluates expression and displays result

### Template Driven Form (app.html)
- Form element wrapping the calculator UI
- Input field with `[(ngModel)]` for two-way binding
- Table layout with nested `*ngFor` loops for button grid
- Event binding with `(click)` for button interactions
- Conditional styling using `[ngClass]`

### Styling (app.css)
- Centered calculator with max-width constraint
- Large, readable input field
- Bold, accessible button text
- Responsive design principles

## How It Works

1. **Initial Load**: Display shows '0' by default
2. **Number Input**: Click number buttons (0-9) to build expression
3. **Operators**: Click +, -, *, / to add operators
4. **Calculate**: Click '=' to evaluate expression using JavaScript's `eval()`
5. **Clear**: Click 'C' to reset calculator to initial state
6. **Error Handling**: Invalid expressions display 'Error'

## Skills & Techniques Demonstrated
- Angular standalone components
- Template-driven forms
- Two-way data binding with ngModel
- Structural directives (*ngFor, *ngIf)
- Attribute directives ([ngClass])
- Event binding
- Component properties and methods
- Bootstrap integration
- Responsive web design
- Error handling

## Author
Rooman Mir  
Capstone Project B - Angular Basic Calculator  
Course: Angular

## License
This project is created as part of SEED Academy for Angular course completion.