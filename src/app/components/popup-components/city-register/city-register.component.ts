import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../../../models/popup-component';
import { City } from '../../../models/city';
import { Country } from '../../../models/country';
import { CountryService } from '../../../remote/country/country.service';
import { PopupService } from '../../../asistants/popup/popup.service';
import { NgForm } from '@angular/forms';
import { CityService } from '../../../remote/city/city.service';

@Component({
  selector: 'app-city-register',
  templateUrl: './city-register.component.html',
  styleUrls: ['./city-register.component.css']
})
export class CityRegisterComponent implements OnInit, PopupComponent {

  public countryList: Country[] = [];
  public city: City = { name: '' };

  constructor(
    private countryService: CountryService,
    private popupService: PopupService,
    private cityService: CityService
  ) { }

  async ngOnInit() {
    this.countryList = await this.countryService.onlyCountries();
  }

  popupData(data) {

  }

  async doRegister(frm: NgForm) {
    if (frm.invalid) {
      alert('Form geçersiz');
      return;
    }
    this.city.id = await this.cityService.register(this.city);
    this.popupService.hide(this.city);
  }

}
