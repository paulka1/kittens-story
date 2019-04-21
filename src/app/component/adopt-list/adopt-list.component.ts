import { Component, OnInit } from '@angular/core';
import { ListToAdoptService } from 'src/app/services/list-to-adopt.service';

@Component({
  selector: 'app-adopt-list',
  templateUrl: './adopt-list.component.html',
  styleUrls: ['./adopt-list.component.scss']
})
export class AdoptListComponent implements OnInit { 

  listKittenAdopted;  /* Table to contain the adopted cat */

  constructor(private service : ListToAdoptService) { }

  ngOnInit() {
    this.listKittenAdopted = this.service.tableAdopt;
  }

}
