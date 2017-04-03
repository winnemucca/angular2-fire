import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: any;
  owner: any;
  city: any;
  bedrooms: any;
  price: number;
  type: any;
  image: any;

  constructor(private firebaseService: FirebaseService, private router: Router ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    const listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    };

    this.firebaseService.addListing(listing);
    this.router.navigate(['listings']);
    console.log('this', listing);
  }

}
