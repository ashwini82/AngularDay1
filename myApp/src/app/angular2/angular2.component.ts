import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ServiceNameService } from '../service-name.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: ['./angular2.component.css']
})
export class Angular2Component implements OnInit {

  myPerson: Person[];

  constructor(private ps1: ServiceNameService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    this.ps1.getPerson().subscribe(
      (response) => {
        this.myPerson = response;
        console.log("Observal is working.");
      },
      (error) => { console.log(error); }
    );
  }
}





