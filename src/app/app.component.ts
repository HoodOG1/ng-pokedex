import { Component, ViewChild } from '@angular/core';
import { ResultComponent } from './components/result/result.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pokedex';
  data = undefined;
  visible:boolean = false;


  @ViewChild(ResultComponent) resultComponent:ResultComponent;

  constructor(private dataService: DataService) { }

  id: string;

  get(query: string): void {
    this.dataService.getData(query).subscribe(res => {
      this.callModal(query)
    },
    err => {
      console.error(`There is no Pokemon found named ${query}. Be sure to type the name correctly!`);
      this.visible = true;
    },
    () => {
      this.visible = false;
    })
  }

  callModal(id: string) {
    this.resultComponent.displayModal(id);
  }

  recieveId($event: string) {
    this.id = $event;
    console.log(`App: recieved event and id ${$event}`)
    this.callModal($event)
  }
}
