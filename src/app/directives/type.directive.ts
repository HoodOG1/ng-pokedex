import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appType]'
})
export class TypeDirective implements OnInit {

  @Input() appType = '';
  element: any;

  constructor(el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {
    switch(this.appType) {
      case 'normal':
        this.element.nativeElement.style.backgroundColor = '#A8A778';
        break;
      case 'fighting':
        this.element.nativeElement.style.backgroundColor = '#C03028';
        break;
      case 'flying':
        this.element.nativeElement.style.backgroundColor = '#A890EF';
        break;
      case 'poison':
        this.element.nativeElement.style.backgroundColor = '#A040A0';
        break;
      case 'ground':
        this.element.nativeElement.style.backgroundColor = '#E0C068';
        break;
      case 'rock':
        this.element.nativeElement.style.backgroundColor = '#B8A038';
        break;
      case 'bug':
        this.element.nativeElement.style.backgroundColor = '#A8B820';
        break;
      case 'ghost':
        this.element.nativeElement.style.backgroundColor = '#705898';
        break;
      case 'steel':
        this.element.nativeElement.style.backgroundColor = '#B8B8D0';
        break;
      case 'fire':
        this.element.nativeElement.style.backgroundColor = '#F08030';
        break;
      case 'water':
        this.element.nativeElement.style.backgroundColor = '#6890F0';
        break;
      case 'grass':
        this.element.nativeElement.style.backgroundColor = '#78C850';
        break;
      case 'electric':
        this.element.nativeElement.style.backgroundColor = '#F8D030';
        break;
      case 'psychic':
        this.element.nativeElement.style.backgroundColor = '#F85888';
        break;
      case 'ice':
        this.element.nativeElement.style.backgroundColor = '#98D8D8';
        break;
      case 'dragon':
        this.element.nativeElement.style.backgroundColor = '#7038F8';
        break;
      case 'dark':
        this.element.nativeElement.style.backgroundColor = '#705848';
        break;
      case 'fairy':
        this.element.nativeElement.style.backgroundColor = '#EE99AC';
        break;
      case '???':
        this.element.nativeElement.style.backgroundColor = '#68A090';
        break;
      default:
        break;
    }
  }

}
