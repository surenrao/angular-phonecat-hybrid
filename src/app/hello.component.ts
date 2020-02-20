import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 (click)="onClick()" [style.color]="state?'blue':'black'">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  state=false;
  onClick() {
    this.state=!this.state;
    this.clicked.emit(this.state);
  }
}
