import { Component, OnInit } from '@angular/core';
import { TexonomyService } from '../texonomy.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.scss']
})
export class TermListComponent implements OnInit {
  data:any

  constructor(private TermListService:TexonomyService,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }
  ngOnInit(): void {
    setInterval(()=>{
      this.data = this.TermListService.showData();
      console.log(this.data);
    },3000)
  }
}
