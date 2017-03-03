import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { } from 'ionic-angular';
import { CoursesPage, CourseHomePage } from '../pages';
import { EliteApi, MockDataApi } from '../../shared/shared';

/*
  Generated class for the MyCourses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-courses',
  templateUrl: 'my-courses.page.html'
})
export class MyCoursesPage {
  courseCategoryRequest: { CategoryFilter: [''], UserID: 'AFE27E8E-B9CC-42F5-BCBA-E9DD8CC571FA' };
  myCourses: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private mockDataApi: MockDataApi) { }

  itemTapped($event, courseData) {
    this.navCtrl.push(CourseHomePage, courseData);
  }

  goToCourses() {
    this.navCtrl.push(CoursesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCoursesPage');

    this.myCourses = this.mockDataApi.getMyCourses();
    // this.eliteApi.getMyCourses(this.courseCategoryRequest).then(
    //   (data) => {
    //     this.myCourses = data;
    //   });
  }

}
