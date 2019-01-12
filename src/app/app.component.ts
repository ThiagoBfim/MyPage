import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  brazilImage = 'assets/images/brazil.png';
  usaImage = 'assets/images/usa.png';
  lightsOn = false;

  constructor(private elementRef: ElementRef, private translate: TranslateService) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

  switchLanguage = (lang: string) => {
    this.translate.use(lang);
  }

  switchLight() {
    this.lightsOn = !this.lightsOn;
    if (this.lightsOn) {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'aliceblue';
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    }
  }
}
