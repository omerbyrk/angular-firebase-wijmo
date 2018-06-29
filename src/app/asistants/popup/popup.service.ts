import { Injectable, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopupModel } from '../../models/popup-model';
import { PopupComponent } from '../../components/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private popupContainerRef: ViewContainerRef;
  private popupComponent: PopupComponent = undefined;

  constructor(private resolver: ComponentFactoryResolver) { }

  async show(props: PopupModel) {
    if (!this.popupComponent) {
      this.popupComponent = this.createPopupContainer();
    }
    return await this.popupComponent.show(props);
  }

  hide(reason) {
    this.popupComponent.hide(reason);
  }

  private createPopupContainer() {
    const factory = this.resolver.resolveComponentFactory(PopupComponent);
    const componentRef = this.popupContainerRef.createComponent(factory);
    return componentRef.instance;
  }

  set popupComponentContainer(viewContainerRef: ViewContainerRef) {
    this.popupContainerRef = viewContainerRef;
  }
}
