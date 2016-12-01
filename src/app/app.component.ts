import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from "./event.service";
import { EventComponent } from "./event/event.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService,AuthService]
  //providers: [EventService]
})

export class AppComponent {
  title = 'Zenith Society Events';
}
