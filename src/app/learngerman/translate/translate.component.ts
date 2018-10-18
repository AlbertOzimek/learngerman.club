import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';
import {debounceTime, map} from 'rxjs/operators';
import {Subject} from 'rxjs';

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
  selector: 'learngerman-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  targetLanguages: Array<string> = ['en', 'pl'];
  translationArray: Array<Translation>;
  userInput$ = new Subject();


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.userInput$
      .pipe(debounceTime(500))
      .subscribe((userInput: string) => {
        this.translate(userInput);
      });
  }


  onKeyUp(inputValue) {
    this.userInput$.next(inputValue);
  }


  translate(inputValue) {
    for (const targetLanguage of this.targetLanguages) {
      this.getTranslation(targetLanguage, inputValue);
    }
  }

  getTranslation(targetLanguage: string, text: string) {
    this.translationArray = new Array();
    this.translateService.translate(text, targetLanguage)
      .pipe(
        map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText),
        debounceTime(50000)
      )
      .subscribe((translatedText: string) => {
        this.translationArray.push({languageKey: targetLanguage, translatedText: translatedText});
      });
  }
}
