import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptKittensComponent } from './pages/adopt-kittens/adopt-kittens.component';
import { ListKittensComponent } from './pages/list-kittens/list-kittens.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';

const routes: Routes = [
  
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomePageComponent,
  },
  {
    path : 'form',
    component : FormsPageComponent,
  },
  {
    path : 'adopt-kittens',
    component :AdoptKittensComponent,
  },
  {
    path : 'list-kittens',
    component : ListKittensComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
