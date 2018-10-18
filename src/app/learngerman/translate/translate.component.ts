import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate.service';
import {debounceTime, switchMap} from 'rxjs/operators';
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
        switchMap((userInput: string) => this.translateService.translate(userInput))
      );
  }


  onKeyUp(inputValue) {
    this.userInput$.next(inputValue);
  }
}
