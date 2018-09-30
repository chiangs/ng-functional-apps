import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="nav">
    <ul class="navlist">
      <li class="navItem" *ngFor="let item of links">
        <a [routerLink]="[item.link]" [routerLinkActive]="'active'">{{ item.appName }}</a>
      </li>
    </ul>
  </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: { appName: string; link: string }[];
  simpleCalc = { appName: 'Simple Calc', link: 'simple-calc' };
  calorieCounter = { appName: 'Calorie Counter', link: 'cal-count' };

  constructor() {
    this.links = [this.simpleCalc, this.calorieCounter];
  }

  ngOnInit() {}
}
