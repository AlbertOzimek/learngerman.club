import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';

@Component({
  selector: 'leansoft-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  userText: string;
  currentTranslation;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  handleTranslation() {
    this.currentTranslation = this.translateService.createTranslation(this.userText);
  }

  defaultMessage() {
    if (!this.currentTranslation) {
      return 'Enter text and click run translation';
    } else {
      return 'Running translation in the cloud...';
    }
  }
}
