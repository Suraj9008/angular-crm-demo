import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TexonomyService{
  term = [
    {termName: "New Term", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "Covid 19", discription: "<p>this is new term</p>", url: "new term", publish: true},
    {termName: "new Tags", discription: "<p>this is new term</p>", url: "new term", publish: true}
  ]
  getData:any
  constructor() {
   }

   showData(){
      this.getData = JSON.parse(localStorage.getItem('terms'));
    return this.getData
   }
  
  addValue(newValue: any) {
    this.term.push(newValue);
    console.log(this.term);
    const newData = localStorage.setItem('terms', JSON.stringify(this.term))
    return newData
  }
}
