import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { ProgramConhecimentoComponent } from '../program-conhecimento/program-conhecimento.component';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-front-end-conhecimento',
  templateUrl: './front-end-conhecimento.component.html',
  styleUrls: ['./front-end-conhecimento.component.css']
})
export class FrontEndConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Front-End';
  globalService: GlobalService;

  constructor(globalService: GlobalService) {
    this.globalService = globalService;
  }

  ngOnInit() {
    this.createHtmlKnow();
    this.createBootstrapKnow();
    this.createCssKnow();
    this.createJavaScriptKnow();
    this.createAngularKnow();
  }

  createHtmlKnow() {
    const card = new KnowCard();
    card.title = 'HTML';
    this.globalService.updateCardDescribe(card, 'html-describe1', 'html-describe2', 'html-describe3');
    card.image = 'assets/images/html.png';
    card.yearLearn = 2015;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createCssKnow() {
    const card = new KnowCard();
    card.title = 'CSS';
    this.globalService.updateCardDescribe(card, 'css-describe1', 'css-describe2');
    card.image = 'assets/images/css.png';
    card.yearLearn = 2015;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createJavaScriptKnow() {
    const card = new KnowCard();
    card.title = 'Java Script';
    this.globalService.updateCardDescribe(card, 'js-describe1', 'js-describe2', 'js-describe3');
    card.image = 'assets/images/javascript.png';
    card.yearLearn = 2015;
    card.qtdStar = 3;
    this.cards.push(card);
  }

  createAngularKnow() {
    const card = new KnowCard();
    card.title = 'Angular';
    this.globalService.updateCardDescribe(card, 'angular-describe1', 'angular-describe2', 'angular-describe3', 'angular-describe4');
    card.image = 'assets/images/angular.png';
    card.yearLearn = 2017;
    card.qtdStar = 2;
    this.cards.push(card);
  }

  createBootstrapKnow() {
    const card = new KnowCard();
    card.title = 'Bootstrap';
    this.globalService.updateCardDescribe(card, 'bootstrap-describe1', 'bootstrap-describe2', 'bootstrap-describe3');
    card.image = 'assets/images/bootstrap.png';
    card.yearLearn = 2015;
    card.qtdStar = 4;
    this.cards.push(card);
  }

}
