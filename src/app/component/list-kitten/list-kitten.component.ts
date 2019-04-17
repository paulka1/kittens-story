import { Component, OnInit } from '@angular/core';
import { ListToAdoptService } from 'src/app/services/list-to-adopt.service';


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  
  listKitten;

  constructor(private service: ListToAdoptService) { }

  ngOnInit() {
    this.listKitten = this.service.tableKitten
  }

  addToAdopt() {
    /*MOVE THE CAT CARD TO ADOPTION PAGE*/
  }


}
