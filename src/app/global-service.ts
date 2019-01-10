import { Injectable } from '@angular/core';
import { KnowCard } from './model';
import { LangChangeEvent } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GlobalService {

  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  public updateCardDescribe(card: KnowCard, ...infos: string[]) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      card.describes = [];
      // tslint:disable-next-line:forin
      for (const i in infos) {
        this.translate.get(infos[i]).subscribe(res => { card.describes.push(res); });
      }
    });
    this.updateInfoButtonDescribe(card);
  }

  public updateCardCertificationLink(card: KnowCard, ...certification: string[]) {
    // tslint:disable-next-line:forin
    for (const i in certification) {
      card.certificationsLink.push(certification[i]);
    }
  }

  private updateInfoButtonDescribe(card: KnowCard) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (card.showInfo) {
        this.translate.get('esconder-info').subscribe(res => { card.infoButtonDescribe = res; });
      } else {
        this.translate.get('mostrar-info').subscribe(res => { card.infoButtonDescribe = res; });
      }
    });
  }

  public moreInfo(card) {
    card.showInfo = !card.showInfo;
    if (card.showInfo) {
      this.setEsonconderLabel(card);
    } else {
      this.setMostrarLabel(card);
    }
    return card.showInfo;
  }

  public setEsonconderLabel(card: any) {
    this.translate.get('esconder-info').subscribe(res => { card.infoButtonDescribe = res; });
  }

  public setMostrarLabel(card: any) {
    this.translate.get('mostrar-info').subscribe(res => { card.infoButtonDescribe = res; });
  }
}
