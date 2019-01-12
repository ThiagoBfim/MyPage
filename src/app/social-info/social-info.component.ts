import { GlobalService } from './../global-service';
import { Component, OnInit } from '@angular/core';
import { CardSocialInfo } from '../model';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {
  cards = [];
  translate: TranslateService;
  globalService: GlobalService;
  minhaIdade;

  constructor(globalService: GlobalService, translate: TranslateService) {
    this.globalService = globalService;
    this.translate = translate;
    translate.setDefaultLang('pt');
    translate.use('pt');

    this.calculateMinhaIdade();
    this.createCardGit();
    this.createCardGitLab();
    this.createCardLikendin();
    this.createCardKaggle();
    this.createCardStackOverFlow();
  }

  calculateMinhaIdade() {
    const anoNascimento = new Date('1995-08-04T00:00:00');
    const dataAtual = new Date();
    this.minhaIdade = dataAtual.getFullYear() - anoNascimento.getFullYear();
    if (dataAtual.getUTCMonth() < anoNascimento.getUTCMonth()
      || (dataAtual.getUTCMonth() === anoNascimento.getUTCMonth() && dataAtual.getUTCDate() < anoNascimento.getUTCDate())) {
      this.minhaIdade--;
    }

  }

  ngOnInit() {
  }

  createCardGit() {
    const card = new CardSocialInfo();
    card.image = 'assets/images/GitHub-Mark-32px.png';
    card.url = 'https://github.com/ThiagoBfim';
    this.cards.push(card);
  }

  createCardLikendin() {
    const card = new CardSocialInfo();
    card.image = 'assets/images/icon-linkedin.png';
    card.url = 'https://www.linkedin.com/in/thiago-bomfim-37b198a1/';
    this.cards.push(card);
  }

  createCardStackOverFlow() {
    const card = new CardSocialInfo();
    card.image = 'assets/images/stackoverflow-icon.png';
    card.url = 'https://stackoverflow.com/users/8377722/thiago-bomfim';
    this.cards.push(card);
  }

  createCardGitLab() {
    const card = new CardSocialInfo();
    card.image = 'assets/images/gitlab.png';
    card.url = 'https://gitlab.com/ThiagoBfim';
    this.cards.push(card);
  }

  createCardKaggle() {
    const card = new CardSocialInfo();
    card.image = 'assets/images/kaggle.png';
    card.url = 'https://www.kaggle.com/thiagobfim';
    this.cards.push(card);
  }

}
