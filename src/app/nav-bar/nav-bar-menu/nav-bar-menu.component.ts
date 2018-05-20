import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'leansoft-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.scss']
})
export class NavBarMenuComponent implements OnInit {
  @Input() toolbar;

  constructor() {
  }

  ngOnInit() {
  }

}
