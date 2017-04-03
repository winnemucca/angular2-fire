import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home-component/home-component.component';
import { ListingsComponent } from './components/daycareListings/listings/listings.component';
import { ListingComponent } from './components/daycareListings/listing/listing.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'listing/:id', component: ListingComponent},
  { path: 'add-listing', component: AddListingComponent},
  { path: 'edit-listing/:id', component: EditListingComponent},
  { path: '**', component: PageNotFoundComponent}
];
