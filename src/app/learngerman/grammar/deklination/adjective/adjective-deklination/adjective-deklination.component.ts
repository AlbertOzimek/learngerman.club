import {Component, OnInit} from '@angular/core';


const DEFINITE_ARTIKLE_DATA: any[] = [
  {case: 'Nominativ', maskulin: 'der rote Stein', feminin: 'die klare Luft', neutral: 'das helle Light', plural: 'die runden Formen'},
  {case: 'Akkusativ', maskulin: 'den roten Stein', feminin: 'die klare Luft', neutral: 'das helle Light', plural: 'die runden Formen'},
  {case: 'Dativ', maskulin: 'dem roten Stein', feminin: 'der klaren Luft', neutral: 'dem hellen Light', plural: 'den runden Formen'},
  {case: 'Genitiv', maskulin: 'des roten Steines', feminin: 'der klaren Luft', neutral: 'des hellen Lichtes', plural: 'der runden Formen'},
];

const INDEFINITE_ARTIKLE_DATA: any[] = [
  {case: 'Nominativ', maskulin: 'ein roter Stein', feminin: 'eine klare Luft', neutral: 'ein helles Light', plural: 'runde Formen'},
  {case: 'Akkusativ', maskulin: 'einen roten Stein', feminin: 'eine klare Luft', neutral: 'ein helles Light', plural: 'runde Formen'},
  {case: 'Dativ', maskulin: 'eineem roten Stein', feminin: 'einer klaren Luft', neutral: 'eindem hellen Light', plural: 'runden Formen'},
  {
    case: 'Genitiv',
    maskulin: 'eines roten Steines',
    feminin: 'einer klaren Luft',
    neutral: 'eines hellen Lichtes',
    plural: 'runden Formen'
  },
];

const OHNE_ARTIKEL: any[] = [
  {case: 'Nominativ', maskulin: 'roter Stein', feminin: 'klare Luft', neutral: 'helles Light', plural: 'runde Formen'},
  {case: 'Akkusativ', maskulin: 'roten Stein', feminin: 'klare Luft', neutral: 'helles Light', plural: 'runde Formen'},
  {case: 'Dativ', maskulin: 'rotem Stein', feminin: 'klarer Luft', neutral: 'hellem Light', plural: 'runden Formen'},
  {case: 'Genitiv', maskulin: 'roten Steines', feminin: 'klarer Luft', neutral: 'hellen Lichtes', plural: 'runder Formen'},
];

export interface ArtikleType {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'learngerman-adjective-deklination',
  templateUrl: './adjective-deklination.component.html',
  styleUrls: ['./adjective-deklination.component.scss']
})
export class AdjectiveDeklinationComponent implements OnInit {
  displayedColumns: string[] = ['case', 'maskulin', 'feminin', 'neutral', 'plural'];
  artikleTypes: ArtikleType[] = [
    {value: 'definite', viewValue: 'bestimmten Artikel'},
    {value: 'indefinite', viewValue: 'unbestimmten Artikel'},
    {value: 'withoutArticle', viewValue: 'ohne Artikel'}
  ];
  dataSource = DEFINITE_ARTIKLE_DATA;
  selected;


  constructor() {
    this.selected = this.artikleTypes[0];
  }

  changeArticleType(articleType: any) {
    this.dataSource = INDEFINITE_ARTIKLE_DATA;
    switch (articleType) {
      case 'definite':
        this.dataSource = DEFINITE_ARTIKLE_DATA;
        break;
      case 'indefinite':
        this.dataSource = INDEFINITE_ARTIKLE_DATA;
        break;
      case 'withoutArticle':
        this.dataSource = OHNE_ARTIKEL;
        break;
    }
  }

  ngOnInit() {
  }

}
