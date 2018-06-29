import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { Person } from '../../models/person';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../remote/country/country.service';
import { PersonService } from '../../remote/person/person.service';
import { PopupService } from '../../asistants/popup/popup.service';
import { CountryRegisterComponent } from '../popup-components/country-register/country-register.component';
import { CityRegisterComponent } from '../popup-components/city-register/city-register.component';
import { City } from '../../models/city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {

  private countryList: Country[] = [];
  public person = new Person();

  constructor(
    private countryService: CountryService,
    private personService: PersonService,
    private popupService: PopupService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.countryList = await this.countryService.countries();
    this.route.paramMap.subscribe(async (params) => {
      const person_id = params.get('id');
      if (person_id) {
        this.person = await this.personService.person(person_id);
        this.person._country = this.countryList.find(country => this.person.country_id === country.id);
      }
    });
  }

  async register(frmRegister: NgForm) {
    if (frmRegister.invalid) {
      alert('Form geçerli değil');
      return;
    }
    const result = this.person.id ? await this.personService.update(this.person) : await this.personService.save(this.person);
    console.log('İşlem başarıyla tamamlandı');
  }

  async showCountryRegisterPopup() {
    const registeredCountry = await this.popupService.show({ component: CountryRegisterComponent, title: 'Country Register Form' });
    registeredCountry && this.countryList.push(registeredCountry);
  }

  async showCityRegisterPopup() {
    const registeredCity: City = await this.popupService.show({ component: CityRegisterComponent, title: 'City Register Form' });
    registeredCity && this.countryList.find(country => country.id === registeredCity.country_id).cityList.push(registeredCity);
  }

  onCountryChanged(event: any) {
    if (this.person.city_id) {
      this.person._city = this.person._country.cityList.find(city => city.id === this.person.city_id);
      this.person.city_id = null;
    }
  }
}
