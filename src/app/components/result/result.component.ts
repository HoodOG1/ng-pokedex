import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  @ViewChild('resultModal') el: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  displayModal(id:number) {
    this.el.nativeElement.style.display = 'flex';
    let data = this.dataService.getData(`${id}`).subscribe((data) => {
      console.log(data);
    })
  }

  closeModal() {
    this.el.nativeElement.style.display = 'none';
  }

}
