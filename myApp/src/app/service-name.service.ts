import { Injectable } from '@angular/core';
import { Person } from './person';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
  private myPerson: Person[] = [
    new Person("ASHWINI", "PATIL"),
    new Person("AMY", "SHEPARD")
  ];

  constructor() { }

  getPerson(): Observable<Person[]> {
    this.delay(4000);
    return of(this.myPerson.filter((person) => {
      return ("Name : " + person.getFullName());
    }));

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}

