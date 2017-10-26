import { Component, OnInit } from '@angular/core';
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
   this.profileService.getProfile().subscribe(test =>{
        this.profiledata = test; });
  }
}
