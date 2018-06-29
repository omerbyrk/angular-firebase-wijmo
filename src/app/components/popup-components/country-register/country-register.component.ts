import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../../../models/popup-component';
import { Country } from '../../../models/country';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../../remote/country/country.service';
import { PopupService } from '../../../asistants/popup/popup.service';

@Component({
  selector: 'app-country-register',
  templateUrl: './country-register.component.html',
  styleUrls: ['./country-register.component.css']
})
export class CountryRegisterComponent implements OnInit, PopupComponent {

  country: Country = { name: '', cityList: [] };

  constructor(
    private countryService: CountryService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
  }

  popupData(data) {

  }

  async doRegister(form: NgForm) {
    if (form.invalid) {
      alert(`Form isn't valid`);
      return;
    }

    if (await this.countryService.exist(this.country.name)) {
      alert(`Böyle bir ülke zaten var`);
    } else {
      this.country.id = await this.countryService.countryRegister(this.country);
      this.popupService.hide(this.country);
    }

  }

}
