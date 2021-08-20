import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common"; 

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  mydate=Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
