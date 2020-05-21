import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';
import { of } from 'rxjs';

describe('RandomService', () => {
  let randomService: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomService],
    });

    randomService = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(randomService).toBeTruthy();
  });

  describe('randomizeAll', () => {
    it('should randomize name, pokemon, and role', () => {
      const randomResponse = [
        {
          id: '1',
          name: 'Alex',
          role: 'Programmer',
          pokemon: 'Wobbuffet',
        },
        {
          id: '2',
          name: 'Greg',
          role: 'Sales Representative',
          pokemon: 'Wailord',
        },
      ];

      let response;
      spyOn(randomService, 'randomizeAll').and.returnValue(of(randomResponse));

      randomService.randomizeAll().subscribe((res) => {
        response = res;
      });

      expect(response).toEqual(randomResponse);
    });
  });
});
