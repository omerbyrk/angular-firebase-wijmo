import { Country } from './country';
import { City } from './city';

export class Person {
    id: string;
    name: String = '';
    surname: String = '';
    phone: String = '';
    country_id: string;
    city_id: string;
    _country: Country;
    _city: City;
}
