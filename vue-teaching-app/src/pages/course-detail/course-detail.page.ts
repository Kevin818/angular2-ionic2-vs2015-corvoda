import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import  { EliteApi } from '../../shared/shared';

/*
  Generated class for the CourseDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.page.html'
})
export class CourseDetailPage {

  course: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi) {
    this.course = this.navParams.data;
  }

  goHome() {
    this.navCtrl.parent.parent.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }

}
