import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<object> = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Altaria',
    },
    {
      id: '2',
      name: 'Robert',
      role: 'Engineer',
      pokemon: 'Groudon',
    },
    {
      id: '3',
      name: 'James',
      role: 'Engineer',
      pokemon: 'Caterpie',
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Mew',
    },
  ];

  constructor() {}

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.uid === id;
    });

    return of(user);
  }
}
