import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.cbc.ca/food/content/images/recipes/WinterVegPie.jpg'
    ), new Recipe('A second test Recipe', 'this is simply a second test', 'https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
