import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseCasesPage, CourseDetailPage,ExamsPage } from '../pages';
/*
  Generated class for the CourseHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-home',
  templateUrl: 'course-home.page.html'
})
export class CourseHomePage {
  course: any;
  courseDetailTab = CourseDetailPage;
  courseCasesTab = CourseCasesPage;
  examsTab = ExamsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = this.navParams.data;
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseHomePage');
  }

}
