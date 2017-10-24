import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeroService ]
})

export class AppComponent {
  title = 'Tour of Heroes';
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
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
  }
}
