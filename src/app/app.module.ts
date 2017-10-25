import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core'


import { AppComponent } from './app.component';
import { CharacterComponent} from './Character/character.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemsComponent } from './items/items.component';
import { ProfileService } from './Profile/profile.service';
import { ItemsService } from './items/items.service';
import { CharacterService } from './Character/character.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ProfileComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CharacterService,ProfileService,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
