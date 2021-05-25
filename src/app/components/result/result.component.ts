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

  data: any;
  name: string;
  sprite: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  displayModal(id:string) {
    this.el.nativeElement.style.display = 'flex';
    this.data = this.dataService.getData(`${id}`).subscribe(
      res => {
      this.data = res;
      this.name = res['species']['name'];
      this.sprite = res['sprites']['front_default']
      console.log(this.data)
    },
      err => {
        console.log('Couldnt get HTTP-Request')
    });
  }

  closeModal() {
    this.el.nativeElement.style.display = 'none';
  }

}
