import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is the way we data binding in Angular';
  jsonValue  = {
    a: 'hello',
    b: 'word'
  };
  userObject ={
    name: 'john',
    age: '32',
    id: 0,
    isColored: true
  }

  newDate = new Date();

 constructor(private httpService: HttpService){}

  handleEvent(){
    // console.log('Button Clicked', this.title);
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
      this.jsonValue = response;
      });
  }

  handleEvent2(event: any){
    console.log(event);

  }
}
