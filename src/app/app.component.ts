import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals =[
     new Goal(1, 'Watch Finding Nemo'),
     new Goal(2, 'Buy cookies'),
     new Goal(3, 'Get new phone case'),
     new Goal(4, 'Get Dog food'),
     new Goal(5, 'Solve math homework'),
     new Goal(6, 'Plot my world domination plan'),
 ]
}
