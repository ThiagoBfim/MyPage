import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-back-end-conhecimento',
  templateUrl: './back-end-conhecimento.component.html',
  styleUrls: ['./back-end-conhecimento.component.css']
})
export class BackEndConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Back-End';

  globalService: GlobalService;

  constructor(globalService: GlobalService) {
    this.globalService = globalService;
  }

  ngOnInit() {
    this.createJavaKnow();
    this.createWicketKnow();
    this.createSpringKnow();
    this.createHibernateKnow();
  }

  createJavaKnow() {
    const card = new KnowCard();
    card.title = 'Java';
    this.globalService.updateCardDescribe(card, 'java-info1', 'java-info2', 'java-info3');
    this.globalService.updateCardCertificationLink(card, 'Oracle 1Z0-808.pdf', 'Oracle 1z0-809.pdf',
      'Design Patterns - Algaworks.pdf', 'HackaTruck - Eldorado.pdf');
    card.image = 'assets/images/Java.png';
    card.yearLearn = 2015;
    card.qtdStar = 5;
    this.cards.push(card);
  }

  createWicketKnow() {
    const card = new KnowCard();
    card.title = 'Wicket Apache';
    this.globalService.updateCardDescribe(card, 'wicket-info1', 'wicket-info2', 'wicket-info3');
    card.image = 'assets/images/wicket.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createSpringKnow() {
    const card = new KnowCard();
    card.title = 'Spring Framework';
    this.globalService.updateCardDescribe(card, 'spring-info1', 'spring-info2', 'spring-info3', 'spring-info4', 'spring-info5');
    this.globalService.updateCardCertificationLink(card, 'Angular with Spring - Algaworks.pdf', 'Spring Framework Expert - Algaworks.pdf');
    card.image = 'assets/images/spring.jpg';
    card.yearLearn = 2016;
    card.qtdStar = 3;
    this.cards.push(card);
  }

  createHibernateKnow() {
    const card = new KnowCard();
    card.title = 'Hibernate';
    this.globalService.updateCardDescribe(card, 'hibernate-info1', 'hibernate-info2', 'hibernate-info3', 'hibernate-info4');
    card.image = 'assets/images/hibernate.jpg';
    card.yearLearn = 2015;
    card.qtdStar = 4;
    this.cards.push(card);
  }

}
