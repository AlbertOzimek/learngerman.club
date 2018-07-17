import {Component, OnInit} from '@angular/core';


const DEFINITE_ARTIKLE_DATA: any[] = [
  {case: 'Nominativ', maskulin: 'der rote Stein', feminin: 'das helle Light', neutral: 'die klare Luft', plural: 'die runden Formen'},
  {case: 'Akkusativ', maskulin: 'den roten Stein', feminin: 'das helle Light', neutral: 'die klare Luft', plural: 'die runden Formen'},
  {case: 'Dativ', maskulin: 'dem roten Stein', feminin: 'dem hellen Light', neutral: 'der klaren Luft', plural: 'den runden Formen'},
  {case: 'Genitiv', maskulin: 'des roten Steines', feminin: 'des hellen Lichtes', neutral: 'der klaren Luft', plural: 'der runden Formen'},
];

const INDEFINITE_ARTIKLE_DATA: any[] = [
  {case: 'Nominativ', maskulin: 'ein roter Stein', feminin: 'ein helles Light', neutral: 'eine klare Luft', plural: 'runde Formen'},
  {case: 'Akkusativ', maskulin: 'einen roten Stein', feminin: 'ein helles Light', neutral: 'eine klare Luft', plural: 'runde Formen'},
  {case: 'Dativ', maskulin: 'eineem roten Stein', feminin: 'eindem hellen Light', neutral: 'einer klaren Luft', plural: 'runden Formen'},
  {
    case: 'Genitiv',
    maskulin: 'eines roten Steines',
    feminin: 'eines hellen Lichtes',
    neutral: 'einer klaren Luft',
    plural: 'runden Formen'
  },
];

@Component({
  selector: 'leansoft-adjective-deklination',
  templateUrl: './adjective-deklination.component.html',
  styleUrls: ['./adjective-deklination.component.scss']
})
export class AdjectiveDeklinationComponent implements OnInit {
  displayedColumns: string[] = ['case', 'maskulin', 'feminin', 'neutral', 'plural'];
  dataSource = DEFINITE_ARTIKLE_DATA;

  constructor() {
  }

  loadUndefiniteArtikleData() {
    this.dataSource = INDEFINITE_ARTIKLE_DATA;
  }

  ngOnInit() {
  }

}
