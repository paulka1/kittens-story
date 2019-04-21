import { Component, OnInit } from '@angular/core';
import { ListToAdoptService } from 'src/app/services/list-to-adopt.service';


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  
  listKitten;   /* Table to contain the created cat from the formPage */

  constructor(private service: ListToAdoptService) { }

  ngOnInit() {
    this.listKitten = this.service.tableKitten
  }

  addToAdopt(cat,i) {
    /*MOVE THE CAT CARD TO ADOPTION PAGE WITH THE SERVICE*/
    this.service.listToAdopt(cat);

    /*REMOVE THE SELECT CARD*/ 
    this.listKitten.splice(i,1);
  }

}
