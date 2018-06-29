import { Injectable } from '@angular/core';
import db from '../firebase/firebase.db';
import { Country } from '../../models/country';
import { CityService } from '../city/city.service';
import { ConverterService } from '../../asistants/converter/converter.service';
import { City } from '../../models/city';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private cityService: CityService,
    private converter: ConverterService
  ) { }

  async  countries() {
    const countryList: Country[] = this.converter.queryToData(await db.collection('country').get());
    const cityList = await this.cityService.cities();
    countryList.forEach(country => country.cityList = cityList.filter(city => city.country_id === country.id));
    return countryList;
  }

  async onlyCountries() {
    return this.converter.queryToData(await db.collection('country').get());
  }

  async countryRegister(country: Country) {
    return (await db.collection('country').add({ name: country.name })).id;
  }

  async exist(name) {
    return (await db.collection('country').where('name', '==', name).get()).docs.length > 0;
  }
}

