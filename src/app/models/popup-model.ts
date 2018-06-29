import { Type } from '@angular/core';
import { PopupComponent } from './popup-component';

export interface PopupModel {
    component: Type<PopupComponent>;
    title: string;
    data?: any;
}
