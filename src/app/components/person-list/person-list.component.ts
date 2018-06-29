import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../../models/popup-component';
import { Person } from '../../models/person';
import { PersonService } from '../../remote/person/person.service';
import { ICollectionView, CollectionView, PropertyGroupDescription } from 'wijmo/wijmo';
import { PopupService } from '../../asistants/popup/popup.service';
import { DialogComponent } from '../popup-components/dialog/dialog.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  private _dataPeople: ICollectionView;
  private _groupBy: String = '';
  private _filterBy: String = '';

  constructor(
    private personService: PersonService,
    private popupService: PopupService
  ) { }

  async ngOnInit() {
    this.dataPeople = await this.personService.getPeople();
    console.log(this._dataPeople.items);
  }

  set dataPeople(items: Person[]) {
    this._dataPeople = new CollectionView(items);
    this._dataPeople.filter = (item: Person): boolean => {
      return !this._filterBy && true || item.name.toLowerCase().includes(this._filterBy.toLowerCase());
    };
  }

  get groupBy() {
    return this._groupBy;
  }

  set groupBy(groupBy: String) {
    if (this._groupBy !== groupBy) {
      this._groupBy = groupBy;
      this._applyByGroup(this._groupBy);
    }
  }

  private _applyByGroup(groupName) {
    console.log(groupName);
    const data = this._dataPeople;
    data.beginUpdate();
    data.groupDescriptions.clear();
    /*const groupDesc = new PropertyGroupDescription(groupName, (item, props) => {
      console.log(item, props);
      return item.name;
    });*/
    if (groupName) {
      const groupDesc = new PropertyGroupDescription(groupName);
      data.groupDescriptions.push(groupDesc);
    }
    data.refresh();
    data.endUpdate();
  }

  get filterBy() {
    return this._filterBy;
  }

  set filterBy(value: any) {
    if (this._filterBy !== value) {
      this._filterBy = value;
      this._dataPeople.refresh();
    }
  }

  async doDelete(person: Person) {
    const result = await this.popupService.show({
      component: DialogComponent,
      title: 'Silme İşlemi',
      data: { text: `${person.name} isimli kişiyi silmek istediğinize emin misiniz?` }
    });
    if (result) {
      this.personService.delete(person.id).then(() => {
        const items = this._dataPeople.items;
        items.splice(this._dataPeople.items.indexOf(person), 1);
        this.dataPeople = items;
        alert('Kişi başarıyla silindi!');
      });
    }
  }
}
