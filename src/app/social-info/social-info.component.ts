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
  brazilImage = 'assets/images/brazil.png';
  usaImage = 'assets/images/usa.png';
  cards = [];
  translate: TranslateService;
  globalService: GlobalService;

  constructor(globalService: GlobalService, translate: TranslateService) {
    this.globalService = globalService;
    this.translate = translate;
    translate.setDefaultLang('pt');
    translate.use('pt');

    this.createCardGit();
    this.createCardLikendin();
    this.createCardStackOverFlow();
  }

  ngOnInit() {
  }

  createCardGit() {
    const card = new CardSocialInfo();
    card.title = 'Git Hub';
    this.updateInfoButtonDescribe(card);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get('github-describe').subscribe(res => { card.describe = res; });
    });
    card.image = 'assets/images/GitHub-Mark-32px.png';
    card.url = 'https://github.com/ThiagoBfim';
    this.cards.push(card);
  }

  createCardLikendin() {
    const card = new CardSocialInfo();
    card.title = 'Linkedin';
    this.updateInfoButtonDescribe(card);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get('linkedin-describe').subscribe(res => { card.describe = res; });
    });
    card.image = 'assets/images/icon-linkedin.png';
    card.url = 'https://www.linkedin.com/in/thiago-bomfim-37b198a1/';
    this.cards.push(card);
  }

  createCardStackOverFlow() {
    const card = new CardSocialInfo();
    card.title = 'Stack Overflow';
    this.updateInfoButtonDescribe(card);
     this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get('stackoverflow-describe').subscribe(res => { card.describe = res; });
    });
    card.image = 'assets/images/stackoverflow-icon.png';
    card.url = 'https://stackoverflow.com/users/8377722/thiago-bomfim';
    this.cards.push(card);
  }

  moreInfo(card) {
    this.globalService.moreInfo(card);
  }

  public updateInfoButtonDescribe(card: CardSocialInfo) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (card.showInfo) {
        this.translate.get('esconder-info').subscribe(res => { card.infoButtonDescribe = res; });
      } else {
        this.translate.get('mostrar-info').subscribe(res => { card.infoButtonDescribe = res; });
      }
    });
  }

  switchLanguage = (lang: string) => {  // <-- creating a new method
    this.translate.use(lang); // <-- invoking `use()`
  }

}
