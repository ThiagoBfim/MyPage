import { KnowCard } from './../model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-conhecimento',
  templateUrl: './program-conhecimento.component.html',
  styleUrls: ['./program-conhecimento.component.css']
})
export class ProgramConhecimentoComponent implements OnInit {

  urlStar = 'assets/images/gold-star.png';
  urlStarEmpty = 'assets/images/blank-star.png';
  urlClock = 'assets/images/clock.png';
  yearNow = (new Date()).getFullYear();

  // tslint:disable-next-line:no-input-rename
  @Input('obj') cards: any;

  // tslint:disable-next-line:no-input-rename
  @Input('title') title: any;
  constructor() {
  }

  ngOnInit() {
  }

  moreInfo(card) {
    card.showInfo = !card.showInfo;
  }

  closedPanel(cardsProperty: KnowCard[]) {
    cardsProperty.forEach(element => {
      element.showInfo = false;
    });
  }

}
