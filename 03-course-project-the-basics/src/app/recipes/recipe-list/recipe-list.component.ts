import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Arroz com carne moída', 'O melhor prato de todos', 'https://i0.hippopx.com/photos/581/867/771/minced-meat-minced-meat-meat-schweinemett-preview.jpg'),
    new Recipe('Macarrão Alho e Óleo', 'O segundo melhor prato de todos', 'https://i0.hippopx.com/photos/581/867/771/minced-meat-minced-meat-meat-schweinemett-preview.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
