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
    this.createFlutterKnow();
    this.createIonicKnow();
    this.createAndroidStudioKnow();
  }

  createFlutterKnow() {
    const card = new KnowCard();
    card.title = 'Flutter';
    this.globalService.updateCardDescribe(card, 'flutter-describe1', 'flutter-describe2', 'flutter-describe3');
    card.image = 'assets/images/flutter.png';
    card.yearLearn = 2019;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createIonicKnow() {
    const card = new KnowCard();
    card.title = 'Ionic';
    this.globalService.updateCardDescribe(card, 'ionic-describe1', 'ionic-describe2', 'ionic-describe3',
      'ionic-describe4');
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
