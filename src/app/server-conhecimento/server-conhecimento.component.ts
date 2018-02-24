import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-server-conhecimento',
  templateUrl: './server-conhecimento.component.html',
  styleUrls: ['./server-conhecimento.component.css']
})
export class ServerConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Server';

  globalService: GlobalService;

  constructor(globalService: GlobalService, translate: TranslateService) {
    this.globalService = globalService;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('servidor').subscribe(res => { this.title = res; });
    });
  }

  ngOnInit() {
    this.createJbossKnow();
    this.createTomCatKnow();
  }

  createJbossKnow() {
    const card = new KnowCard();
    card.title = 'Jboss Wildfly';
    this.globalService.updateCardDescribe(card, 'jboss-describe1', 'jboss-describe2', 'jboss-describe3');
    card.image = 'assets/images/wildfly.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createTomCatKnow() {
    const card = new KnowCard();
    card.title = 'Apache Tomcat';
    this.globalService.updateCardDescribe(card, 'apache-describe1', 'apache-describe2', 'apache-describe3');
    card.image = 'assets/images/tomcat.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

}
