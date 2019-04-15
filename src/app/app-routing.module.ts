import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AdoptKittensComponent } from './adopt-kittens/adopt-kittens.component';
import { ListKittensComponent } from './list-kittens/list-kittens.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path : 'form',
    component : FormulaireComponent,
  },
  {
    path : 'adopt-kittens',
    component :AdoptKittensComponent,
  },
  {
    path : 'list-kittens',
    component : ListKittensComponent,
  },
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
