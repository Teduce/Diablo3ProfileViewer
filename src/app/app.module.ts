import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core'


import { AppComponent } from './app.component';
import { CharacterComponent} from './Character/character.component';
import { PorfileComponent } from './Profile/porfile/porfile.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemsComponent } from './items/items.component';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import { ProfileListComponent } from './profile-list/profile-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PorfileComponent,
    ProfileComponent,
    ItemsComponent,
    ProfilelistComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
