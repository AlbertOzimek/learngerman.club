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
  translationArray = new Array<Translation>();
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
    this.targetLanguages.forEach((targetLanguage) => {
      this.getTranslation(targetLanguage, inputValue);
    });
  }

  getTranslation(targetLanguage: string, text: string) {
    this.translateService.translate(text, targetLanguage)
      .pipe(
        map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText)
      )
      .subscribe((translatedText: string) => {
        this.translationArray.push({languageKey: targetLanguage, translatedText: translatedText});
      });
  }
}
