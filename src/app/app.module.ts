import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(<any>[{
            path: 'dashboard',
            component: DashboardComponent
        }, {
            path: 'heroes',
            component: HeroesComponent
        }, {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }])
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
