import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock.crisis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
    );
  }
}