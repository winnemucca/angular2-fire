import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// services

import { FirebaseService } from './services/firebase.service';

// third party
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

export const firebaseConfig = {
  apiKey: 'AIzaSyCRTyhESU_HW4bLoHoPTsGDVI3KvVG6pY4',
  authDomain: 'daycare-listings.firebaseapp.com',
  databaseURL: 'https://daycare-listings.firebaseio.com',
  storageBucket: 'daycare-listings.appspot.com',
  messagingSenderId: '410407501477'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

import {
  ListingsComponent,
  ListingComponent
} from './components/daycareListings/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';

import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
