import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is the way we data bundng in Angular';

  handleEvent(){
    console.log('Button Clicked', this.title);
  }
}
