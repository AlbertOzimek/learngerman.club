import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';
import {map} from 'rxjs/operators';

interface TranslationObject {
  data: {
    translations;
  };
}

interface Translation {
  languageKey,
  translatedText;
}

@Component({
  selector: 'leansoft-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  userText: string;
  targetLanguages: Array<string> = ['en', 'pl'];
  translationArray: Array<Translation>;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  translate($event) {
    for (const targetLanguage of this.targetLanguages) {
      this.getTranslation(targetLanguage, $event.target.value);
    }
  }

  getTranslation(targetLanguage: string, text: string) {
    this.translationArray = new Array();
    this.translateService.translate(text, targetLanguage)
      .pipe(map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText))
      .subscribe((translatedText: string) => {
        this.translationArray.push({languageKey: targetLanguage, translatedText: translatedText});
      });
  }
}
