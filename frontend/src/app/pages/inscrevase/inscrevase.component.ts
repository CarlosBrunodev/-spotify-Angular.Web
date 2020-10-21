import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrevase',
  templateUrl: './inscrevase.component.html',
  styleUrls: ['./inscrevase.component.css']
})
export class InscrevaseComponent implements OnInit {

  displayedColumns = ['id', 'name'];

  constructor() { }

  ngOnInit(): void {
  }

}
