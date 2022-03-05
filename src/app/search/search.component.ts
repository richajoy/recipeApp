import { Component, OnInit } from '@angular/core';

import { edamam } from '../service/edamam.service'

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  jsonData: any; 
  dataItems: any;

  // Class variables to search in q
  //q: string;

  private searchTerms: Subject<JSON>;


  constructor(private edamam: edamam) { }

  search(q:string, ingr: string, cuisineType: string, mealType: string): void {
    this.jsonData = {searchItem: q, ingredients: ingr, cuisines: cuisineType, meals: mealType};
    this.searchTerms.next(this.jsonData)
  }

  ngOnInit(): void {
    this.searchTerms = new Subject<JSON>();

    this.edamam
      .getData("Chicken", "5-15", "American", "Lunch")
      .subscribe(result =>
        {
          this.dataItems = result
        });
    this.searchTerms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data: any) => {
        return this.edamam.getData(data.searchItem, data.ingredients, data.cuisines, data.meals)
      })
    )
    .subscribe((result: any) =>
    {
      this.dataItems = result;
    }
    )
  }

  sliceUri(uri: string) {
    let recipeId = uri.split('#').pop();
    return recipeId;
  }
}
