import { Component, OnInit } from '@angular/core';



const DEFINITE_ARTIKLE_DATA: any[] = [
  {case: 'Nominativ', maskulin: 'der rote Stein', feminin: 'das helle Light', neutral: 'die klare Luft', plural: 'die runden Formen'},
  {case: 'Akkusativ', maskulin: 'den roten Stein', feminin: 'das helle Light', neutral: 'die klare Luft', plural: 'die runden Formen'},
  {case: 'Dativ', maskulin: 'dem roten Stein', feminin: 'dem hellen Light', neutral: 'der klaren Luft', plural: 'den runden Formen'},
  {case: 'Genitiv', maskulin: 'des roten Steines', feminin: 'des hellen Lichtes', neutral: 'der Klaren Luft', plural: 'der runden Formen'},
];

@Component({
  selector: 'leansoft-adjective-deklination',
  templateUrl: './adjective-deklination.component.html',
  styleUrls: ['./adjective-deklination.component.scss']
})
export class AdjectiveDeklinationComponent implements OnInit {
  displayedColumns: string[] = ['case', 'maskulin', 'feminin', 'neutral', 'plural'];
  dataSource = DEFINITE_ARTIKLE_DATA;
  constructor() { }

  ngOnInit() {
  }

}
