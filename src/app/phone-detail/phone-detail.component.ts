import { Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: [ './phone-detail.component.css' ]
})
export class PhoneDetailComponent implements OnInit  {
  constructor(
    @Inject('$routeParams') private $routeParams: any,
    @Inject('Phone') private phoneSvc: any 
  ) {}

  public phone: any;
  public mainImageUrl: string;

  ngOnInit() {
    this.phone = this.phoneSvc.get({phoneId: this.$routeParams.phoneId}, 
      (phone) => {
        console.log('Calling ng1 service from ng9 component');
        this.setImage(phone.images[0]);
      });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  };
}
