import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Profile } from './profile'
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }
  
  public getProfile(): Observable<any> {
    // const apiUrl = "https://us.api.battle.net/d3/profile/Teduce-1439/?locale=en_US&apikey=dbpt8xyhejmc3u5zbf6ufhj764ehfy2q"
     const apiUrl = "assets/profile.json"
    return this.http.get(apiUrl)
      .map(response => {
        return response.json();
      });


  }
}
