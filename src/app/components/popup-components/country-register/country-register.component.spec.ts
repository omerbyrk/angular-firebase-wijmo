import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegisterComponent } from './country-register.component';

describe('CountryRegisterComponent', () => {
  let component: CountryRegisterComponent;
  let fixture: ComponentFixture<CountryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
