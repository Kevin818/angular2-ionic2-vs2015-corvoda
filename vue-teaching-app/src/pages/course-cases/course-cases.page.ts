import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CourseCases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-cases',
  templateUrl: 'course-cases.page.html'
})
export class CourseCasesPage {
  @Input("slides") slides: string[] = [];  
  @Input("pageNumber") pageNumber: number = 5;  
  @Output("slideClick") slideClick = new EventEmitter<number>();  
  
  mySlideOptions;  
  selectedIndex: number = 0; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseCasesPage');
  }

  ngOnInit() {  
    this.mySlideOptions = {  
      loop: false,  
      autoplay: false,  
      initialSlide: 0,  
      pager: false,  
      slidesPerView: this.pageNumber,  
      paginationHide: true,  
      paginationClickable: true  
    };  
  }  
  
  onClick(index) {  
    this.selectedIndex = index;  
    this.slideClick.emit(index);  
  }  

}
