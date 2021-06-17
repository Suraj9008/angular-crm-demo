import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TexonomyService {

  term = [
    {termName: "New Term", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "Covid 19", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "new Tags", discription: "<p>this is new term</p>", url: "new term", publish: true}
  ]
  getData = JSON.parse(localStorage.getItem('terms'));

  constructor() { }

  addValue(newValue: any) {
    this.term.push(newValue);
    console.log(this.term);
    const newData = localStorage.setItem('terms', JSON.stringify(this.term))
    return newData
  }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  showData() {

  }
}
