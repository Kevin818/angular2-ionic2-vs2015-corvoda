import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {
    MyCoursesPage, CoursesPage, CourseDetailPage,
    CourseCasesPage, CourseHomePage, ExamsPage,
    LoginPage, MyExamsPage, MyFavoritesPage,
    ExamDetailPage
} from '../pages/pages';

@NgModule({
    declarations: [
        MyApp,
        MyCoursesPage,
        CoursesPage,
        CourseDetailPage,
        CourseCasesPage,
        CourseHomePage,
        ExamsPage,
        LoginPage,
        MyExamsPage,
        MyFavoritesPage,
        ExamDetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            backButtonText: '返回',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios'
        }, {}
        )],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MyCoursesPage,
        CoursesPage,
        CourseDetailPage,
        CourseCasesPage,
        CourseHomePage,
        ExamsPage,
        LoginPage,
        MyExamsPage,
        MyFavoritesPage,
        ExamDetailPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
