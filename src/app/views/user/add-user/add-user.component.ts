import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import { TexonomyService } from '../../texonomy.service'

const socialMediaFields =`<div class="row">
<div class="col-lg-6 p-2">
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
<div class="col-lg-6 p-2">
  <label class="col-md-2  col-sm-3 col-xs-12 control-label help-block form-text">Username</label>
  <div class="col-md-10 col-sm-9 col-xs-12">
    <input type="text" class="form-control" value="SpeedyBecky">
    <p class="help-block form-text">Your Social Media username</p>
  </div>
</div>
</div>`


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})



export class AddUserComponent implements OnInit,AfterViewInit {
  name = 'Angular';
  Data:any;
  private stepper: Stepper;

  @ViewChild('socialField') socialField:ElementRef;
  next() {
    this.stepper.next();
  }
  constructor(private userService: TexonomyService) { }

  onSubmit() {
    return false;
  }
  ngOnInit() {
    setInterval(()=>{
      this.Data = this.userService.showSocialMedia();
      console.log(this.Data);
    },3000)
  }

  ngAfterViewInit(){
    setInterval(()=>{
      this.Data = this.userService.showSocialMedia();
      console.log(this.Data);
    },3000)
  }
  addMore(){
      console.log("hello",this.socialField);
      this.socialField.nativeElement.insertAdjacentHTML('beforeend', socialMediaFields)
  }

}