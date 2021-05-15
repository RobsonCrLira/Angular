import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';

const routes: Routes = [
  { path: 'create', component: CreatePeopleComponent },
  { path: 'list', component: ListPeopleComponent },
  { path: 'update', component: UpdatePeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
