import { Component } from "@angular/core";
import {
  animate,
  trigger,
  style,
  transition,
  state,
} from '@angular/animations'
import { NONE_TYPE } from "@angular/compiler";

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('isOpen', [
      state('open', style({
        'opacity': '1',
        'background': '#443c3c'
      })),
      state('closed', style({
        'opacity': '0',
        'display': 'none'
      })),
      transition('open => closed', [
        animate('1s'),
      ]),
      transition('closed => open', [
        animate('0.5s'),
      ]),
    ])
  ],
})
export class HeaderComponent {
  show: boolean = false;

  constructor() {}

  toggle() {
    this.show = !this.show;
  }
}
