import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Functions which returns the results of the winners from each race in specified year
  getResults(url) {
    return this.http.get(url + '.json').pipe(
      map((results: any) =>
        results.MRData.RaceTable.Races.map((result) => {
          return {
            position: result.Results[0].position,
            round: result.round,
            number: result.Results[0].number,
            raceName: result.raceName,
            driver:
              result.Results[0].Driver.givenName +
              ' ' +
              result.Results[0].Driver.familyName,
            constructor: result.Results[0].Constructor.constructorId,
          };
        })
      )
    );
  }

  // Function which returns the world champion for the particular year
  getChampion(url, year) {
    return this.http.get(url).pipe(
      map((results: any) =>{
        return results.MRData.StandingsTable.StandingsLists.filter((val)=>{
          return val.season === year;
        })
        .map(val => {
          return {
            driver : val.DriverStandings[0].Driver.givenName +
            ' ' +
            val.DriverStandings[0].Driver.familyName
          };
        }
        );
        }));
  }
}
