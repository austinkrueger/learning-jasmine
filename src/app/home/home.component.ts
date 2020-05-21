import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RandomService } from '../services/random/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users;
  pokemonUrl;

  constructor(
    private usersService: UsersService,
    private pokeService: PokemonService,
    private randomService: RandomService
  ) {}

  ngOnInit(): void {
    this.usersService.all().subscribe((res) => {
      this.users = res;
      for (const user of this.users) {
        this.getPokemonInfo(user);
      }
    });
  }

  getPokemonInfo(user: any): void {
    const tmpUser = user;
    this.pokeService
      .getByName(user.pokemon.toLowerCase())
      .subscribe((res: any) => {
        console.log(res);
        tmpUser.pokemonImgUrl = res.sprites.front_default;
        tmpUser.pokemonUrl =
          'https://www.pokemon.com/us/pokedex/' + user.pokemon.toLowerCase();
        user = tmpUser;
      });
  }

  randomize() {
    this.randomService.randomizeAll().subscribe((res) => {
      this.users = res;
      for (const user of this.users) {
        this.getPokemonInfo(user);
      }
    });
  }
}
