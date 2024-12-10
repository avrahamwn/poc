import {Component, inject, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DynamicallyLoadedComponent
} from './components/dynamically-loaded/dynamically-loaded.component';
import {PickInputFromComponent} from './types.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'poc';
  vcr = inject(ViewContainerRef)

  ngOnInit(){
    const dynamicallyComponentRef = this.vcr.createComponent(DynamicallyLoadedComponent);
    const dynamicallyComponentInputs: PickInputFromComponent<DynamicallyLoadedComponent> = {title: 'DynamicallyLoadedComponent Title', obj: {description:3}};
    Object.entries(dynamicallyComponentInputs).forEach(([key, value]) => {
      dynamicallyComponentRef.setInput(key, value)

    })
  }
}
