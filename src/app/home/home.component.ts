import {Component, OnInit} from '@angular/core';
import {MyDataService} from "../my-data.service";
import {IHomeLuvResponseModel, ISearchResultModel} from "../shared/interface/homeluv.interface";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1
  homeLuvHouses: ISearchResultModel[] = [];

  constructor(private myDataService: MyDataService) {}

  homeLuvRespData(page?: number) {
    this.myDataService.getData(page).subscribe((data) =>{
      const {searchResultModels} = data as IHomeLuvResponseModel
      this.homeLuvHouses.push(...searchResultModels)
    })
  }
  ngOnInit(): void {
      this.homeLuvRespData()
  }

  onScroll(): void {
    this.homeLuvRespData(++this.page)
  }
}
