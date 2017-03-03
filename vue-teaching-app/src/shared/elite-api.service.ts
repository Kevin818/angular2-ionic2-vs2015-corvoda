import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {

    private baseUrl = 'http://localhost:64208/api';
    currentUser: any;

    constructor(private http: Http) {

    }

    getCourses() {
        return new Promise(resolve => {
            this.http.get(this.baseUrl + '/courses/coursesdata')
                .subscribe(res => resolve(res.json()));
        }
        )
    }

    getMyCourses(courseCategoryParam) {
        return new Promise(resolve => {
            this.http.post(this.baseUrl + '/courses/user/datasource', courseCategoryParam)
                .subscribe(
                result => resolve(result.json()));
        })
    }

    getUserInfo(userId): Observable<any> {
        return this.http.get(this.baseUrl + '/user/' + userId)
            .map((response: Response) => {
                this.currentUser = response.json();
                return this.currentUser;
            })
    }
}