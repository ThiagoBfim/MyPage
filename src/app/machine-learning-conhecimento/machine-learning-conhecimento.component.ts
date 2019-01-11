import { Component, OnInit } from '@angular/core';
import { KnowCard } from '../model';
import { GlobalService } from '../global-service';

@Component({
  selector: 'app-machine-learning-conhecimento',
  templateUrl: './machine-learning-conhecimento.component.html',
  styleUrls: ['./machine-learning-conhecimento.component.css']
})
export class MachineLearningConhecimentoComponent implements OnInit {

  cards = [];
  title = 'Machine Learning';

  globalService: GlobalService;

  constructor(globalService: GlobalService) {
    this.globalService = globalService;
  }

  ngOnInit() {

    this.createScikitLearnKnow();
    this.createPytorchKnow();
  }

  createScikitLearnKnow() {
    const card = new KnowCard();
    card.title = 'Scikit Learn';
    this.globalService.updateCardDescribe(card, 'sckit-learn-info1');
    this.globalService.updateCardCertificationLink(card, 'Data Science e Machine Learning - Udemy.pdf');
    card.image = 'assets/images/scikit-learn.png';
    card.yearLearn = 2018;
    card.qtdStar = 1;
    this.cards.push(card);
  }


  createPytorchKnow() {
    const card = new KnowCard();
    card.title = 'Pytorch';
    this.globalService.updateCardDescribe(card, 'pytorch-info1', 'pytorch-info2', 'pytorch-info3');
    card.image = 'assets/images/pytorch-logo.png';
    card.yearLearn = 2018;
    card.qtdStar = 2;
    this.cards.push(card);
  }

}
