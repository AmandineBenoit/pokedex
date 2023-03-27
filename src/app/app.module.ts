import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PokeListComponent } from './Components/poke-list/poke-list.component';
import { PokeCardComponent } from './Components/poke-card/poke-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
