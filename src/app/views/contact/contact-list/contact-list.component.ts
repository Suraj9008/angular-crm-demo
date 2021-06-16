import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  email: string;
  mobile: number;
  workDetails:string;
  address: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Jon Doe',
    email: 'sample@gmail.com',
    mobile:  9117075200,
    workDetails:'manager',
    address: 'Russia'
  },
  {
    name: 'Sam Doe',
    email: 'sample@gmail.com',
    mobile: 9976140512,
    workDetails:'manager',
    address: 'Canada'
  },
  {
    name: 'Alis Maxigun',
    email: 'sample@gmail.com',
    mobile: 9629091255,
    workDetails:'manager',
    address: 'United States'
  },
  {
    name: 'Kelis Mark',
    email: 'sample@gmail.com',
    mobile: 9596960525,
    workDetails:'manager',
    address: 'China'
  },
  {
    name: 'Bruse Mark',
    email: 'sample@gmail.com',
    mobile: 9596960525,
    workDetails:'manager',
    address: 'USA'
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.mobile).includes(term)
        || pipe.transform(country.address).includes(term);
  });
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [DecimalPipe]
})
export class ContactListComponent implements OnInit {

  headElements = ['id', 'name', 'email', 'mobile','Work Details','address'];

    countries$: Observable<Country[]>;
    filter = new FormControl('');
    constructor(pipe: DecimalPipe) {
      this.countries$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text, pipe))
      );
    }
    newCountry = COUNTRIES.sort()
    ngOnInit(): void {
  }
}