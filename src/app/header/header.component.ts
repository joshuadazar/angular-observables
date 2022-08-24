import { Component, VERSION, OnInit } from '@angular/core';
import { HeroService } from '../service/service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  names = 'Angular ' + VERSION.major;

  constructor(public DS: HeroService) {}
  ngOnInit(): void {
    this.DS.nombre$.subscribe((name) => this.names = name);
  }
}
