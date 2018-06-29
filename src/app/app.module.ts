import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonRegisterComponent } from './components/person-register/person-register.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AppRouterModule } from './app.router.module';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridModule, WjFlexGridCellTemplate } from 'wijmo/wijmo.angular2.grid';
import { FormsModule } from '@angular/forms';
import { CountryService } from './remote/country/country.service';
import { ConverterService } from './asistants/converter/converter.service';
import { PersonService } from './remote/person/person.service';
import { CityService } from './remote/city/city.service';
import { PopupService } from './asistants/popup/popup.service';
import { PopupComponent } from './components/popup/popup.component';
import { CountryRegisterComponent } from './components/popup-components/country-register/country-register.component';
import { CityRegisterComponent } from './components/popup-components/city-register/city-register.component';
import { DialogComponent } from './components/popup-components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonRegisterComponent,
    PopupComponent,
    CountryRegisterComponent,
    CityRegisterComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    WjInputModule,
    WjGridModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [PopupComponent, CountryRegisterComponent, CityRegisterComponent, DialogComponent],
  providers: [CountryService, ConverterService, PersonService, CityService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
