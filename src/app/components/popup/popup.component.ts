import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { WjPopup } from 'wijmo/wijmo.angular2.input';
import { PersonListComponent } from '../person-list/person-list.component';
import { PopupModel } from '../../models/popup-model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @ViewChild('popup', { read: WjPopup }) private popup: WjPopup;
  @ViewChild('body', { read: ViewContainerRef }) private popup_body: ViewContainerRef;
  public props = {};
  public resolve;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  private setPopup(props: PopupModel) {
    this.props = props;
    this.popup_body.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(props.component);
    const componentRef = this.popup_body.createComponent(componentFactory);
    componentRef.instance.popupData(props.data);
  }

  show(props: PopupModel): Promise<any> {
    return new Promise((resolve) => {
      this.setPopup(props);
      this.popup.show(true);
      this.resolve = resolve;
    });
  }

  hide(result) {
    this.popup.hide(result);
  }

  private hidden() {
    this.resolve(this.popup.dialogResult);
  }
}
