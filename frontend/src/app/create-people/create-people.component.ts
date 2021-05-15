import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {
  people: People = new People();
  submited = false;

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {

  }

  novaPessoa(): void {
    this.submited = false;
    this.people = new People();
  }

  salvar() {
    this.peopleService.createPeople(this.people).subscribe(data =>
      console.log(data),
      error => console.log(error));
    this.people = new People();
    this.listPessoas
  }

  onSubmit() {
    this.submited = true;
    this.salvar
  }

  listPessoas() {
    this.router.navigate(['/list'])
  }

}
