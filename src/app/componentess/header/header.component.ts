import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mydate:any;
  hora:any;
  constructor() { }

  ngOnInit(): void {
    this.mydate=new Date().getTime();
    
    
    console.log(this.mydate)
  }

}
