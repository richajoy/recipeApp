import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component'
import { NutritionInfoComponent } from './nutrition-info/nutrition-info.component'
import { YoutubeComponent } from './youtube/youtube.component'

const routes: Routes = [
  { path: '',               component: SearchComponent},
  { path: 'nutrition/:id',  component: NutritionInfoComponent},
  { path: 'youtubeLink/:label', component: YoutubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
