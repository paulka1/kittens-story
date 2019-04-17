import { Component, OnInit } from '@angular/core';
import { Chat } from '../../class/cat';
import { ListToAdoptService } from 'src/app/services/list-to-adopt.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {


  nameKitten: string;
  raceKitten: string;
  bornKitten: string;
  photoKitten: string;
  cat: Chat;


  constructor(private service: ListToAdoptService) { }
  

  ngOnInit() {

    }
addKitten() {

  /*Creation of object cat*/ 
  this.cat = {
    name: this.nameKitten,
    race: this.raceKitten,
    born: this.bornKitten,
    photo: this.photoKitten
  };

  /*Push the cat's object in a table with list-to-adopt Service*/ 
  this.service.formToService(this.cat) 

  /*Reset the Form Empty*/ 
  this.nameKitten = '';
  this.raceKitten = '';
  this.bornKitten = '';
  this.photoKitten = '';
}

  }





