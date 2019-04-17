import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdoptKittensComponent } from './pages/adopt-kittens/adopt-kittens.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListKittensComponent } from './pages/list-kittens/list-kittens.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ListKittenComponent } from './component/list-kitten/list-kitten.component';


@NgModule({
  declarations: [
    AppComponent,
    AdoptKittensComponent,
    FooterComponent,
    FormsPageComponent,
    FormulaireComponent,
    HomePageComponent,
    ListKittensComponent,
    NavbarComponent,
    ListKittenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
