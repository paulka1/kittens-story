import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListToAdoptService {

  constructor() { }

  tableKitten = [];

formToService(item) {
  this.tableKitten.push(item);
  console.log(this.tableKitten);
}

}

