import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  @ViewChild('resultModal') el: ElementRef;

  data: Object;
  usefulData: any = {};
  sprite: string;
  types: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  displayModal(id:string) {
    this.el.nativeElement.style.display = 'flex';
    this.data = this.dataService.getData(`${id}`).subscribe(
      res => {
      this.usefulData.name = res['species']['name']
      this.usefulData.sprite = res['sprites']['front_default']
      this.usefulData.shiny = res ['sprites']['front_shiny']
      this.usefulData.hp = res['stats'][0]['base_stat']
      this.usefulData.att = res['stats'][1]['base_stat']
      this.usefulData.def = res['stats'][2]['base_stat']
      this.usefulData.satt = res['stats'][3]['base_stat']
      this.usefulData.sdef = res['stats'][4]['base_stat']
      this.usefulData.spd = res['stats'][5]['base_stat']
      this.usefulData.types = res['types']
      this.sprite = this.usefulData.sprite
      for (let i = 0; i < this.usefulData.types.length; i++) {
        this.usefulData.types[i] = this.usefulData.types[i].type.name;
      }

      console.log(this.usefulData)
    },
      err => {
        console.log('Couldnt get HTTP-Request')
    });
  }

  closeModal() {
    this.el.nativeElement.style.display = 'none';
  }

}
