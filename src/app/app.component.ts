import { Component } from '@angular/core';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _launchService: LaunchService){

  }
  public openGitRepo(){
    this._launchService.getNativeWindow().open('https://github.com/viveknegi99/spaceX');
  }
}
