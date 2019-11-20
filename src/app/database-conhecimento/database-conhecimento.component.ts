import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-database-conhecimento',
  templateUrl: './database-conhecimento.component.html',
  styleUrls: ['./database-conhecimento.component.css']
})
export class DatabaseConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Data Base';

  globalService: GlobalService;

  constructor(translate: TranslateService, globalService: GlobalService) {
    this.globalService = globalService;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('banco-dados').subscribe(res => { this.title = res; });
    });
  }

  ngOnInit() {
    this.createSqlKnow();
    this.createFlywayKnow();
    this.createNoSqlKnow();
  }

  createSqlKnow() {
    const card = new KnowCard();
    card.title = 'SQL';
    this.globalService.updateCardDescribe(card, 'sql-describe1', 'sql-describe2', 'sql-describe3');
    this.globalService.updateCardCertificationLink(card, 'SQL - Certificado.pdf');
    card.image = 'assets/images/sql.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createNoSqlKnow() {
    const card = new KnowCard();
    card.title = 'NoSql';
    this.globalService.updateCardDescribe(card, 'nosql-describe1');
    card.image = 'assets/images/NoSQL.jpg';
    card.yearLearn = 2017;
    card.qtdStar = 2;
    this.cards.push(card);
  }

  createFlywayKnow() {
    const card = new KnowCard();
    card.title = 'Flyway';
    this.globalService.updateCardDescribe(card, 'flyway-describe1', 'flyway-describe2');
    card.image = 'assets/images/flyway.png';
    card.yearLearn = 2017;
    card.qtdStar = 4;
    this.cards.push(card);
  }

}
