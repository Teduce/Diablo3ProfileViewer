import { Component, OnInit } from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import { ProfileService } from './profile.service'
import {Profile} from './profile'
import {Hero} from './profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileobject: object;
  public profiledata: Profile;
  public str : string 
  public heroes: Hero[];
  public blah: number;
  public obj : number;
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
     let jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_OBJECT_NULL; // never allow null
        
     
   this.profileService.getProfile().subscribe(test =>
     {
        this.profileobject  = test;
        try 
        {
        this.profiledata =jsonConvert.deserialize(this.profileobject, Profile);
        this.str = JSON.stringify(this.profiledata)
      } catch (e) {
            console.log((<Error>e));
        }
      

        });
     }
  

}
