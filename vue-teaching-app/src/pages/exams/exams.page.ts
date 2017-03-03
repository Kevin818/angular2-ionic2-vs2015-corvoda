import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExamDetailPage } from '../pages';

/*
  Generated class for the Exams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.page.html'
})
export class ExamsPage {

  exams : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exams = this.navParams.data.exams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
  }

itemTapped($event, exam) {
    this.navCtrl.push(ExamDetailPage, exam);
  }
}
