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

  }

}
