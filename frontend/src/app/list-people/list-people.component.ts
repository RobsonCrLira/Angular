import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  pessoas!: Observable<People[]>

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
  }
  reloadData() {
    this.pessoas = this.peopleService.getPeopleList();
  }

  deletePeople(id: number) {
    this.peopleService.deletePeople(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

}
