import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  name = new FormControl('');
}