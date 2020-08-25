import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  page = 1;
  pageSize = 8;
  collectionSize ;
  resultArr = [];
  refreshArr = [];
  year: string;
  filter = new FormControl('');
  champion: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getResultData();
  }

  // Function for getting the winners list which calls a service to import all the data from the API
  // Function fetched parameter from Router and pass URL and Year to Service to fetch the results
  getResultData() {
    const srchVal = this.filter.value;
    this.route.params.subscribe( params => {
      this.year = params.id;
      this.dataService.getResults('http://ergast.com/api/f1/' + this.year + '/results/1')
        .subscribe((res: any[]) => {
          if (srchVal.trim() !== ''){
            this.resultArr = res.filter(val => {
              return (val.raceName.indexOf(srchVal) !== -1 || val.driver.indexOf(srchVal) !== -1
                      || val.constructor.indexOf(srchVal) !== -1);
            });
          } else {
            this.resultArr = res;
          }
          this.collectionSize = this.resultArr.length;
          this.refreshResults();
        });
      this.getWinner();
      });
  }

  // Function for setting the Pagination Details
  refreshResults() {
      this.refreshArr = this.resultArr
        .map((country, i) => ({id: i + 1, ...country}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  search() {
    this.getResultData();
  }

  // Function for fetching the world champion for the specified year from the data service
  getWinner() {
    this.dataService.getChampion('http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55', this.year)
    .subscribe ((res) => {
      this.champion = res[0].driver;
    });

  }
}
