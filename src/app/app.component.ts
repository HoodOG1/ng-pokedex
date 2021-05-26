import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultComponent } from './components/result/result.component';
import { DataService } from './services/data.service';
import { FormControl } from '@angular/forms';
import pokemons from './data/pokemon.json';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild(ResultComponent) resultComponent:ResultComponent;

  data = undefined;
  visible:boolean = false;

  control = new FormControl();
  pokemons: string[];
  filteredPokemons: Observable<string[]>

  constructor(private dataService: DataService) {
    this.pokemons = pokemons;
  }

  id: string;

  ngOnInit() {
    this.filteredPokemons = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

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

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.pokemons.filter(pokemon => this._normalizeValue(pokemon).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
