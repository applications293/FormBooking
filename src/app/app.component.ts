import { Component } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile ;

   constructor(private info: InfoService){
    this.info.getUser().subscribe(profile => {this.profile = profile});

    //Another subscribe exp
//  this.info.getInfo().subscribe(res => { this.profile = res})
  }
}
