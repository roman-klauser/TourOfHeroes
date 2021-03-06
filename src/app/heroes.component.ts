import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}
  
  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
     this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
}
