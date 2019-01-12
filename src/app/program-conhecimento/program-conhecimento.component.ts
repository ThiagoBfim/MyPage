import { GlobalService } from './../global-service';
import { KnowCard } from './../model';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
  widthCard = '50%';
  qtdOpenCard = 0;
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

  moreInfo(card) {
    const showInfo = this.globalService.moreInfo(card);
    if (showInfo) {
      this.qtdOpenCard++;
      this.widthCard = '100%';
    } else {
      this.qtdOpenCard--;
      if (this.qtdOpenCard === 0 && window.innerWidth > 770) {
        this.widthCard = '50%';
      }
    }
  }

  openPanel() {
    if (window.innerWidth < 770) {
      this.widthCard = '100%';
    }
  }

  closedPanel(cardsProperty: KnowCard[]) {
    this.qtdOpenCard = 0;
    this.widthCard = '50%';
    cardsProperty.forEach(element => {
      element.showInfo = false;
      this.globalService.setMostrarLabel(element);
    });
  }

}
