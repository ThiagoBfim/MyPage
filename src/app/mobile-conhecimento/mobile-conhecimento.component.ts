import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-mobile-conhecimento',
  templateUrl: './mobile-conhecimento.component.html',
  styleUrls: ['./mobile-conhecimento.component.css']
})
export class MobileConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Mobile';
  globalService: GlobalService;

  constructor(globalService: GlobalService) {
    this.globalService = globalService;
  }

  ngOnInit() {
    this.createIonicKnow();
    this.createAndroidStudioKnow();
  }

  createIonicKnow() {
    const card = new KnowCard();
    card.title = 'Ionic';
    this.globalService.updateCardDescribe(card, 'ionic-describe1', 'ionic-describe2', 'ionic-describe3',
      'ionic-describe4', 'ionic-describe5');
    this.globalService.updateCardCertificationLink(card, 'Ionic - Udemy.pdf');
    card.image = 'assets/images/ionic.png';
    card.yearLearn = 2018;
    card.qtdStar = 3;
    this.cards.push(card);
  }

  createAndroidStudioKnow() {
    const card = new KnowCard();
    card.title = 'Android Studio';
    this.globalService.updateCardDescribe(card, 'android-describe1', 'android-describe2');
    card.image = 'assets/images/android.png';
    card.yearLearn = 2017;
    card.qtdStar = 1;
    this.cards.push(card);
  }


}
