import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';
import { map } from 'rxjs/operators';
interface TranslationObject {
  data: {
    translations;
  };
}

@Component({
  selector: 'leansoft-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  userText: string;
  translatedTextEnglish: string;
  translatedTextPolish: string;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  translate() {
    this.translateService.translate(this.userText)
      .pipe(map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText))
      .subscribe((translatedText: string) => {
        this.translatedTextEnglish = translatedText;
      });
  }
}
