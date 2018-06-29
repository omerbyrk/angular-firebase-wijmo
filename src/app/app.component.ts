import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { PopupService } from './asistants/popup/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('forPopup', { read: ViewContainerRef }) popupComponentContainer: ViewContainerRef;

  constructor(private popupService: PopupService) {
  }

  ngOnInit() {
    console.log('for Popup', this.popupComponentContainer);
    this.popupService.popupComponentContainer = this.popupComponentContainer;
  }
}
