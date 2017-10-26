import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import { Profile } from './profile';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  public getProfile(): Observable<Profile> {
    const jsonConvert: JsonConvert = new JsonConvert();
          jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
          jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
          jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null
    // const apiUrl = "https://us.api.battle.net/d3/profile/Teduce-1439/?locale=en_US&apikey=dbpt8xyhejmc3u5zbf6ufhj764ehfy2q"
     const apiUrl = 'assets/profile.json';
    return this.http.get(apiUrl)
      .map(response => {
         try {
             return  jsonConvert.deserialize(response.json(), Profile);
        } catch (e) {
            console.log((<Error>e));
        }
      });


  }
}
