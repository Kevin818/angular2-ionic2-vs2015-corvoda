import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyCoursesPage } from '../pages';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  user: { userName : any , password : any};
  error : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.user = {userName :"KevinSun", password :"123456" };
    this.error = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login($event) {
    if (this.user.password != "123456") {
        this.error = "密码错误";
    }
    else {
      //this.navCtrl.push(MyCoursesPage);
      this.navCtrl.setRoot(MyCoursesPage);
    }

  }

  signup() {

  }

}
