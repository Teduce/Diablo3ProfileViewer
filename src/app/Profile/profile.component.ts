import { Component, OnInit } from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import { ProfileService } from './profile.service';
import {Profile} from './profile';
import {Hero} from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profiledata: Profile;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
     const jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null


   this.profileService.getProfile().subscribe(test =>{
        try {
        this.profiledata = jsonConvert.deserialize(test, Profile);
        } catch (e) {
            console.log((<Error>e));
        }
     });
  }
}
