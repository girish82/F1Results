import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
})
export class YearComponent implements OnInit {
  image = 'assets/images/f1.png';
  year = [];

  constructor() {}

  ngOnInit() {
    this.fillYear();
  }

  // function for filling the home page from year 2008 to 2015
  fillYear() {
    for (let i = 2008; i <= 2015; i++) {
      this.year.push(i);
    }
  }
}
