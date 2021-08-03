import { Component } from '@angular/core';
import { Humans } from './Models/Human';
import { Student } from './Models/Students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-five-project';

  public sufyan:Humans=new Humans("Sufyan","Khan");

  public numan:Student=new Student("Sufyan","Khan",1);

  getsufyanName(){
    return this.sufyan.gethumanName();
  }
  getsufyandetails(){
    return this.numan.getstudentdetails();
  }
}
