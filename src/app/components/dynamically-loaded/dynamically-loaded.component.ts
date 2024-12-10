import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dynamically-loaded',
  standalone: true,
  imports: [],
  templateUrl: './dynamically-loaded.component.html',
  styleUrl: './dynamically-loaded.component.less'
})
export class DynamicallyLoadedComponent {
  title = input.required<string>();
  obj = input.required<{description: number}>()
}
