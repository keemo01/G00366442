import { Component, OnInit } from '@angular/core';
import { CovidService } from '../Services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private covidService:CovidService) {}
  CovidData:any = []
  
  ngOnInit(){ 
    this.covidService.GetCovidData().subscribe(
      (data)=>{
        this.CovidData = data.Search;
        console.log(this.CovidData)
      }
    )
  }

}
