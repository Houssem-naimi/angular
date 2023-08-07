import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_first_project';

  name="houssem";
  email="houssem@gmailcom";
  age=25;

  onClick(){
    alert("hello u just clicked me") 
    this.name="firas"
    this.email="firas@gmail.com"
    this.age=26
  }

}
