import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location:any;
  constructor(private httpClient:HttpClient) { }

  getCategoryByLocation(location):any{

    console.log("in location : "+location);

    return this.httpClient.get(`http://localhost:8005/api/v1/location/${location}`);
  }


}
