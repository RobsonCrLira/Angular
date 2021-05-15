import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePeopleComponent,
    UpdatePeopleComponent,
    ListPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
