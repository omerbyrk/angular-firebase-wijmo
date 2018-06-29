import { Injectable } from '@angular/core';
import { ConverterService } from '../../asistants/converter/converter.service';
import { City } from '../../models/city';
import db from '../firebase/firebase.db';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private converter: ConverterService) { }

  async citiesBy(country_id: number) {
    return this.converter.queryToData(await db.collection('city').where('country_id', '==', country_id).get());
  }

  async cities() {
    return this.converter.queryToData(await db.collection('city').get());
  }

  async register(city: City) {
    return (await db.collection('city').add({ name: city.name, country_id: city.country_id })).id;
  }
}
