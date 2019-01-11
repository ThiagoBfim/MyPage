import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-others-conhecimento',
  templateUrl: './others-conhecimento.component.html',
  styleUrls: ['./others-conhecimento.component.css']
})
export class OthersConhecimentoComponent implements OnInit {

  cards = [];
  title: any;

  globalService: GlobalService;

  constructor(globalService: GlobalService, translate: TranslateService) {
    this.globalService = globalService;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('geral').subscribe(res => { this.title = res; });
    });
  }

  ngOnInit() {
    this.createJasperKnow();
    this.createMavenKnow();
    this.createGitKnow();
    this.createLinuxKnow();
  }

  createGitKnow() {
    const card = new KnowCard();
    card.title = 'Git';
    this.globalService.updateCardDescribe(card, 'git-describe1', 'git-describe2', 'git-describe3');
    card.image = 'assets/images/git.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createLinuxKnow() {
    const card = new KnowCard();
    card.title = 'Linux';
    this.globalService.updateCardDescribe(card, 'linux-describe1');
    this.globalService.updateCardCertificationLink(card, 'Linux - Certificado.pdf');
    card.image = 'assets/images/linux.png';
    card.yearLearn = 2016;
    card.qtdStar = 2;
    this.cards.push(card);
  }

  createMavenKnow() {
    const card = new KnowCard();
    card.title = 'Maven';
    this.globalService.updateCardDescribe(card, 'maven-describe1', 'maven-describe2', 'maven-describe3');
    card.image = 'assets/images/maven.png';
    card.yearLearn = 2016;
    card.qtdStar = 4;
    this.cards.push(card);
  }

  createJasperKnow() {
    const card = new KnowCard();
    card.title = 'JasperSoft';
    this.globalService.updateCardDescribe(card, 'jasper-describe1', 'jasper-describe2', 'jasper-describe3');
    card.image = 'assets/images/jasper.png';
    card.yearLearn = 2016;
    card.qtdStar = 3;
    this.cards.push(card);
  }

}
