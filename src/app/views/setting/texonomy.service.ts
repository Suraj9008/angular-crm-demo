import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TexonomyService implements OnInit{
  term = [
    {termName: "New Term", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "Covid 19", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "new Tags", discription: "<p>this is new term</p>", url: "new term", publish: true}
  ]
  
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }

  getData = JSON.parse(localStorage.getItem('terms'));
  ngOnInit(): void {
    
  }

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

}
