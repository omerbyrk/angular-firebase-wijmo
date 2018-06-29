import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonRegisterComponent } from './components/person-register/person-register.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'person-list', component: PersonListComponent },
    { path: 'person-register/:id', component: PersonRegisterComponent },
    { path: 'person-register', component: PersonRegisterComponent },
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRouterModule { }
