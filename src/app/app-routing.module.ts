import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './manual/home/home.component';
import { CloudListComponent } from './manual/cloud-list/cloud-list.component';
import {  ConfigurationComponent } from './general/configuration/configuration.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cloud-list', component: CloudListComponent },
    { path: 'configuration', component: ConfigurationComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
