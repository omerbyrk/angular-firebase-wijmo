import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../../../models/popup-component';
import { PopupService } from '../../../asistants/popup/popup.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, PopupComponent {

  private _data: any;

  constructor(private popupService: PopupService) { }

  ngOnInit() {
  }

  popupData(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  set response(response: boolean) {
    this.popupService.hide(response);
  }

}
