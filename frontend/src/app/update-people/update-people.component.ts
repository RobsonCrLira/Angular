import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.css']
})
export class UpdatePeopleComponent implements OnInit {

  id!: number;
  people!: People;
  submited = false;


  constructor(private route: ActivatedRoute, private router: Router,
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = new People();

    this.id = this.route.snapshot.params['id'];

    this.peopleService.getPeople(this.id)
      .subscribe(data => {
        console.log(data)
        this.people = data;
      }, error => console.log(error));
  }

  updateRoom() {
    this.peopleService.updatePeople(this.id, this.people)
      .subscribe(data => console.log(data), error => console.log(error));
    this.people = new People();
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}
