import { Component, VERSION, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroService } from './service/service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  subscription: Subscription;

  constructor(public DS: HeroService) {}

  ngOnInit(): void {
    this.DS.nombre$.emit('Joshua');

    this.subscription = this.DS.getValor().subscribe(
      (val) => (this.name = val)
    );
  }

  emitName() {
    this.DS.nombre$.emit('nombre desde evento');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
