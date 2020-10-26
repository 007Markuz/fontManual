import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';

//Manual components
import { CloudListComponent } from './manual/cloud-list/cloud-list.component';
import { HomeComponent } from './manual/home/home.component';

//General components
import { MenuComponent } from './general/menu/menu.component';
import { ConfigurationComponent } from './general/configuration/configuration.component';
import { HeaderComponent } from './general/header/header.component';

import { CategorisService } from './core/service/categoris.service';
import { SidenavService } from './core/service/sidenav.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ConfigurationComponent,
    HeaderComponent,
    MenuComponent,
    CloudListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
