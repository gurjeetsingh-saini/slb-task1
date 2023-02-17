import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {app} from "./config/config";

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  constructor(private http:HttpClient) {
  }

  homeLuvReq(page: number){
    return {
      "sizeRange": {
        "lower": 500,
        "upper": 10000
      },
      "priceRange": {
        "lower": 10000,
        "upper": 10000000
      },
      "location": {
        "latitude": "30.266898",
        "longitude": "-97.742798",
        "name": "Austin, TX Area",
        "type": "Market",
        "marketId": 269,
        "marketName": "Austin",
        "city": "",
        "state": "TX",
        "stateName": null,
        "category": "",
        "categoryId": 0,
        "categoryIds": [],
        "ipAddress": null,
        "builder": null,
        "isNPSrp": false
      },
      "searchFacet": {
        "bed": 0,
        "bath": 0,
        "story": 0,
        "radius": 0
      },
      "paging": {
        "pageSize": 22,
        "page": page
      },
      "isNational": true,
      "topMatchesOnly": false,
      "features": [],
      "isMatchingRequired": true,
      "preferences": {
        "marketId": 269,
        "bedroomMin": 0,
        "bedroomMax": 10,
        "priceMin": 600000,
        "priceMax": 5400000,
        "priceType": null,
        "bathMin": 0,
        "bathMax": 10,
        "storiesMax": 0,
        "sqftMin": 0,
        "startDate": null,
        "endDate": null,
        "roomPreference": null,
        "marketLocation": {
          "latitude": "30.266898",
          "longitude": "-97.742798",
          "name": "Austin, TX Area"
        },
        "garage": null,
        "hasPool": null,
        "likedFeatures": []
      },
      "isSearchHome": true,
      "boardId": 268393
    }
  }
  getData(page: number = 1): Observable<Object> {
    return this.http.post(app.homeLuvUrl,this.homeLuvReq(page))
  }
}
