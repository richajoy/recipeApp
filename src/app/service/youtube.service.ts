import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class youtube {
    constructor(private http: HttpClient) { };

    getVideoId(q: string): Observable<any> {
        let url: string = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyCOSl9RXxb5ybFqy7mrS5EwiIucBJyXDl0`;
        return this.http.get(url, {responseType: 'json'});
    }
}