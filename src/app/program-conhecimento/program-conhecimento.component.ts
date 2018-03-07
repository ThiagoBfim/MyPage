import { GlobalService } from './../global-service';
import { KnowCard } from './../model';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  globalService: GlobalService;
  translate: TranslateService;

  constructor(globalService: GlobalService, translate: TranslateService) {
    this.globalService = globalService;
    this.translate = translate;
  }

  ngOnInit() {
  }

  moreInfo(card) {
    this.globalService.moreInfo(card);
  }

  closedPanel(cardsProperty: KnowCard[]) {
    cardsProperty.forEach(element => {
      element.showInfo = false;
      this.globalService.setMostrarLabel(element);
    });
  }

}
