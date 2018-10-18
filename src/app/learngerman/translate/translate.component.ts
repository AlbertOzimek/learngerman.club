import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';
import {debounceTime, map, mergeMap, switchMap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'learngerman-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  userInput$ = new Subject();
  translate$: Observable<Object>;


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translate$ = this.userInput$
      .pipe(
        debounceTime(500),
        switchMap((userInput: string) => {
          return this.translateService.translate(userInput, 'en').pipe(
            mergeMap((en) => {
              return this.translateService.translate(userInput, 'pl')
                .pipe(map((pl) => {
                  return {en, pl};
              }));
            })
          );
        })
      );
  }


  onKeyUp(inputValue) {
    this.userInput$.next(inputValue);
  }
}
