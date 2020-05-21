import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { of } from 'rxjs';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });

    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
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
      ];

      let response;
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe((res) => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Robert',
        role: 'Engineer',
        pokemon: 'Groudon',
      };
      let response;
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse));

      usersService.findOne('2').subscribe((res) => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
