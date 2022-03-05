import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class edamam {
    constructor(private http: HttpClient) { }

    // Edamam recipe search API call
    
    getData(q: string, ingr: string, cuisineType: string, mealType: string): Observable<any> {
        let url: string = 
        `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=48b740a2&app_key=c62d8ad14c727655b4bf203aaafd4267&ingr=${ingr}&cuisineType=${cuisineType}&mealType=${mealType}`;

        return this.http.get(url, {responseType: 'json'});
    }

    // Edamam nutrition information API call for single recipe

    getNutrition(uri: string): Observable<any> {
        console.log("Request reached here", uri)
        let url: string =
        `https://api.edamam.com/api/recipes/v2/${uri}?type=public&app_id=48b740a2&app_key=c62d8ad14c727655b4bf203aaafd4267`;
        
        return this.http.get(url, {responseType: 'json'});

    }
}