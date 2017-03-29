import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home-component/home-component.component';
import { ListingsComponent } from './components/listings/listings.component';

import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listings', component: ListingsComponent},
  { path: '**', component: PageNotFoundComponent}
];
