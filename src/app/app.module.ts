import { SocialInfoComponent } from './social-info/social-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { ProgramConhecimentoComponent } from './program-conhecimento/program-conhecimento.component';
import { FrontEndConhecimentoComponent } from './front-end-conhecimento/front-end-conhecimento.component';
import { BackEndConhecimentoComponent } from './back-end-conhecimento/back-end-conhecimento.component';
import { OthersConhecimentoComponent } from './others-conhecimento/others-conhecimento.component';
import { DatabaseConhecimentoComponent } from './database-conhecimento/database-conhecimento.component';
import { ServerConhecimentoComponent } from './server-conhecimento/server-conhecimento.component';
import { MobileConhecimentoComponent } from './mobile-conhecimento/mobile-conhecimento.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { GlobalService } from './global-service';
import { MachineLearningConhecimentoComponent } from './machine-learning-conhecimento/machine-learning-conhecimento.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SocialInfoComponent,
    ProgramConhecimentoComponent,
    FrontEndConhecimentoComponent,
    BackEndConhecimentoComponent,
    OthersConhecimentoComponent,
    DatabaseConhecimentoComponent,
    ServerConhecimentoComponent,
    MobileConhecimentoComponent,
    MachineLearningConhecimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
