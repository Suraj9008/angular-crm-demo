import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import { TexonomyService } from '../../texonomy.service'

const socialMediaFields = `<div class="row" #deleteRow>
<div class="col-lg-4 p-2">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="form-group pr-5">
      <label class="control-label help-block form-text">Social Media Name</label>
      <div class="ui-select">
        <select class="form-select" aria-label="Default select example">
          <option *ngFor="let i of Data" value="Home">{{i.accountName}}</option>
        </select>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-5 p-2">
  <label class="col-md-2  col-sm-3 col-xs-12 control-label help-block form-text">Username</label>
  <div class="col-md-10 col-sm-9 col-xs-12">
    <input type="text" class="form-control" value="SpeedyBecky">
    <p class="help-block form-text">Your Social Media username</p>
  </div>
</div>
<div class="col-lg-3 mt-4">
  <label class="control-label mt-3">&nbsp;&nbsp;</label>
  <button type="button" mt-1" (click)="removeField()" class="btn btn-danger"">Delete</button>
</div>
</div>`

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  Data: any;
  private stepper: Stepper;

  @ViewChild('socialField') socialField: ElementRef;
  @ViewChild('deleteRow') deleteRow: ElementRef
  next() {
    this.stepper.next();
  }
  constructor(private userService: TexonomyService, private renderer: Renderer2, private host: ElementRef) { }
  onSubmit() {
    return false;
  }
  ngOnInit() {
    setInterval(() => {
      this.Data = this.userService.showSocialMedia();
      console.log(this.Data);
    }, 3000)
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.Data = this.userService.showSocialMedia();
      console.log(this.Data);
    }, 3000)
  }
  addMore() {
    console.log("hello", this.socialField);
    this.socialField.nativeElement.insertAdjacentHTML('beforeend', socialMediaFields);
  }
  removeField(){
    console.log("delete field");
    this.deleteRow.nativeElement.remove(this.deleteRow);
  }
}