import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pokeNames } from './pokenames';
import { peopleNames } from './peoplenames';
import { jobNames } from './jobnames';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  arrayLength = 4;
  constructor() {}

  randomizeAll(): Observable<Array<object>> {
    const constructedUsers = new Array();
    for (let i = 0; i < this.arrayLength; i++) {
      constructedUsers.push({
        id: i,
        name: peopleNames[Math.floor(Math.random() * peopleNames.length)],
        role: jobNames[Math.floor(Math.random() * jobNames.length)],
        pokemon: pokeNames[Math.floor(Math.random() * pokeNames.length)],
      });
    }

    return of(constructedUsers);
  }
}
