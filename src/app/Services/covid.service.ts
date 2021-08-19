import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient : HttpClient) { }

  GetCovidData():Observable<any>{
   return this.httpClient.get('https://covid-19-data.p.rapidapi.com/country/all');
  }
}
