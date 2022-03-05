import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { edamam } from '../service/edamam.service'
import { youtube } from '../service/youtube.service'
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nutrition-info',
  templateUrl: './nutrition-info.component.html',
  styleUrls: ['./nutrition-info.component.css']
})
export class NutritionInfoComponent implements OnInit {

  nutritionFacts: any;

  constructor(private route: ActivatedRoute, private router: Router, private edamam: edamam, private youtube: youtube) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log("URI: ", id);

    // Edamam API call
    
      this.edamam.getNutrition(id)
      .subscribe((data: any) => {
        this.nutritionFacts = data;
        console.log("Log from edamam service: ",this.nutritionFacts.recipe.label)
      });
  }
}
