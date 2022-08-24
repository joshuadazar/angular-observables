import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  nombre$ = new EventEmitter<string>();

  valor$ = new BehaviorSubject<string>('default');

  getValor() {
    return this.valor$.asObservable();
  }
  setValor(_value) {
    this.valor$.next(_value);
  }
}
