import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ExamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exam-detail',
  templateUrl: 'exam-detail.page.html'
})
export class ExamDetailPage {

  exam : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exam = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
  }

}
