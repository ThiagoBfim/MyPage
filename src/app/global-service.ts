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
  }
}
