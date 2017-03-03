import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CourseHomePage } from '../pages';
import { EliteApi, MockDataApi } from '../../shared/shared';

import _ from 'lodash';
/*
  Generated class for the Courses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.page.html'
})
export class CoursesPage {
  courses: any;
  diffultyGroupCourses : any;
  filter : { startDate:"1/1/1999"};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController,
    private mockDataApi: MockDataApi) {

  }

  itemTapped($event, courseData) {
    this.navCtrl.push(CourseHomePage, courseData);
  }

  // onFilterChange($event) {

  //   this.courses = this.mockDataApi.getCourses();
  //   let filterString = $event.value;

  //   this.diffultyGroupCourses =
  //      _.chain(_.filter(this.courses, function (item) { return item.course.name.indexOf(filterString) >= 0 }))
  //       .groupBy('course.difficulty')
  //       .toPairs()
  //       .map(item => _.zipObject(['difficultyName', 'groupCourses'], item))
  //       .value();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');

    let loader = this.loadingController.create(
      {
        content: '数据加载中...',
        // spinner: 'dots'
      }
    );


    loader.present().then(() => {
      setTimeout(() => {
        this.courses = this.mockDataApi.getCourses();

        this.diffultyGroupCourses =
            _.chain(this.courses)
            .groupBy('course.difficulty')
            .toPairs()
            .map(item => _.zipObject(['difficultyName', 'groupCourses'], item))
            .value();

        loader.dismiss();
      },
        500);
    });
    // loader.present().then(() => {
    //   this.eliteApi.getCourses().then(
    //     (data) => {
    //       this.courses = data;
    //       loader.dismiss();
    //     });
    // });


  }

}
