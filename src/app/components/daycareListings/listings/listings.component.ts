import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: any;
  constructor(private firebaseservice: FirebaseService) { }

  ngOnInit() {

    this.firebaseservice.getListings().subscribe(listings => {
      console.log('lists', listings);
      this.listings = listings[0];
    });
  }

}
