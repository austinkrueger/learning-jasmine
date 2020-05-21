import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { of } from 'rxjs';

describe('PokemonService', () => {
  let pokeService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    pokeService = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(pokeService).toBeTruthy();
  });

  describe('getByName', () => {
    it('should return a single pokemon', async(
      inject(
        [HttpTestingController, PokemonService],
        (httpClient: HttpTestingController, pokemonService: PokemonService) => {
          const pokeResponse = {
            id: 383,
            name: 'groudon',
            sprites: {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
            },
            types: [
              {
                type: { name: 'ground' },
              },
            ],
          };

          pokemonService.getByName('groudon').subscribe((res: any) => {
            expect(res.id).toEqual(383);
            expect(res.name).toEqual('groudon');
            expect(res.sprites.front_default).toContain('.png');
            expect(res.types[0].type.name).toEqual('ground');
          });

          const req = httpMock.expectOne(
            'https://pokeapi.co/api/v2/pokemon/groudon'
          );
          expect(req.request.method).toBe('GET');

          req.flush(pokeResponse);
          httpMock.verify();
        }
      )
    ));
  });
});
