import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() cardEvent = new EventEmitter<string>();

  data = {};
  name:string;
  sprite:string;
  id:string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.id = Math.floor((Math.random() * 898) + 1).toString();
    
    this.data = this.dataService.getData(`${this.id}`).subscribe((data) => {
      this.data = data;
      this.name = data['species']['name'];
      this.sprite = data['sprites']['front_default']
    });
  }

  cardClicked() {
    console.log('Card: id emitted!')
    this.cardEvent.emit(this.id)
  }
}
