import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pokedex';
  data = undefined;

  constructor(private dataService: DataService, private router: Router) { }

  id: number;

  get(query: string): void {
    this.dataService.getData(query).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.error(`There is no Pokemon found named ${query}. Be sure to type the name correctly!`);
    })
  }

  recieveId($event: number) {
    this.id = $event;
    console.log(`App: recieved event and id ${$event}`)
  }
}
