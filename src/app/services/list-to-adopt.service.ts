import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListToAdoptService {

  constructor() { }

  tableKitten = [];
  tableAdopt = [];

formToService(item) {
  this.tableKitten.push(item);
  console.log(this.tableKitten);
}

listToAdopt(cat) {
this.tableAdopt.push(cat);
console.log(this.tableAdopt)
}

}

