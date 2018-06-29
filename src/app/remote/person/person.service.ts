import { Injectable } from '@angular/core';
import db from '../firebase/firebase.db';
import { Person } from '../../models/person';
import { ConverterService } from '../../asistants/converter/converter.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private converter: ConverterService) { }

  save(person: Person) {
    const newPerson: any = {
      name: person.name,
      surname: person.surname,
      phone: person.phone,
      country_id: person._country.id,
      city_id: person._city.id
    };

    return db.collection('person').add(newPerson);
  }

  update(person: Person) {
    const newPerson: any = {
      name: person.name,
      surname: person.surname,
      phone: person.phone,
      country_id: person._country.id,
      city_id: person._city.id
    };
    return db.collection('person').doc(person.id).update(newPerson);
  }

  async getPeople() {
    const people: Person[] = this.converter.queryToData((await db.collection('person').get()));
    for (const person of people) {
      person._country = this.converter.docToData(await db.collection('country').doc(person.country_id).get());
      person._city = this.converter.docToData(await db.collection('city').doc(person.city_id).get());
    }
    return people;
  }

  async delete(personID: string) {
    return await db.collection('person').doc(personID).delete();
  }

  async person(person_id: string) {
    const person: Person = this.converter.docToData((await db.collection('person').doc(person_id).get()));
    person._country = this.converter.docToData(await db.collection('country').doc(person.country_id).get());
    person._city = this.converter.docToData(await db.collection('city').doc(person.city_id).get());
    return person;
  }
}
