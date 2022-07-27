import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dishForm = this.formBuilder.group({
    queryF: '',
    cuisineF: '',
    dietF: '',
    intoleranceF: '',
    typeF: '',
  });

  dishResults: any = [];

  cuisines: any = [
    { name: 'African', value: 'african' },
    { name: 'American', value: 'american' },
    { name: 'British', value: 'british' },
    { name: 'Cajun', value: 'cajun' },
    { name: 'Caribbean', value: 'caribbean' },
    { name: 'Chinese', value: 'chinese' },
    { name: 'Eastern European', value: 'easterneuropean' },
    { name: 'European', value: 'european' },
    { name: 'French', value: 'french' },
    { name: 'German', value: 'german' },
    { name: 'Greek', value: 'greek' },
    { name: 'Indian', value: 'indian' },
    { name: 'Irish', value: 'irish' },
    { name: 'Italian', value: 'italian' },
    { name: 'Japanese', value: 'japanese' },
    { name: 'Jewish', value: 'jewish' },
    { name: 'Korean', value: 'korean' },
    { name: 'Latin American', value: 'latinamerican' },
    { name: 'Mediterranean', value: 'mediterranean' },
    { name: 'Mexican', value: 'mexican' },
    { name: 'Middle Eastern', value: 'middleeastern' },
    { name: 'Nordic', value: 'nordic' },
    { name: 'Southern', value: 'southern' },
    { name: 'Spanish', value: 'spanish' },
    { name: 'Thai', value: 'thai' },
    { name: 'Vietnamese', value: 'tietnamese' },
  ];

  diets: any = [
    { name: 'Gluten Free', value: 'gluten free' },
    { name: 'Ketogenic', value: 'ketogenic' },
    { name: 'Vegetarian', value: 'vegetarian' },
    { name: 'Lacto-Vegetarian', value: 'lactovegetarian' },
    { name: 'Ovo-Vegetarian', value: 'ovovegetarian' },
    { name: 'Vegan', value: 'vegan' },
    { name: 'Pescetarian', value: 'pescetarian' },
    { name: 'Paleo', value: 'paleo' },
    { name: 'Primal', value: 'primal' },
    { name: 'Whole30', value: 'whole30' },
  ];

  intolerances: any = [
    { name: 'Dairy', value: 'dairy' },
    { name: 'Egg', value: 'egg' },
    { name: 'Gluten', value: 'gluten' },
    { name: 'Grain', value: 'grain' },
    { name: 'Peanut', value: 'peanut' },
    { name: 'Seafood', value: 'seafood' },
    { name: 'Sesame', value: 'sesame' },
    { name: 'Shellfish', value: 'shellfish' },
    { name: 'Soy', value: 'soy' },
    { name: 'Sulfite', value: 'sulfite' },
    { name: 'Tree Nut', value: 'treenut' },
    { name: 'Wheat', value: 'wheat' },
  ];

  types: any = [
    { name: 'Main Course', value: 'maincourse' },
    { name: 'Side Dish', value: 'sidedish' },
    { name: 'Dessert', value: 'dessert' },
    { name: 'Appetizer', value: 'appetizer' },
    { name: 'Salad', value: 'salad' },
    { name: 'Bread', value: 'bread' },
    { name: 'Breakfast', value: 'breakfast' },
    { name: 'Soup', value: 'soup' },
    { name: 'Beverage', value: 'beverage' },
    { name: 'Sauce', value: 'sauce' },
    { name: 'Marinade', value: 'marinade' },
    { name: 'Fingerfood', value: 'fingerfood' },
    { name: 'Snack', value: 'snack' },
    { name: 'Drink', value: 'drink' },
  ];

  constructor(
    private http: ApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  onFormSubmit(): void {
    this.activatedRoute.queryParams.subscribe(() => {
      this.http
        .getRecipie(
          this.dishForm.value.queryF,
          this.dishForm.value.cuisineF,
          this.dishForm.value.dietF,
          this.dishForm.value.intoleranceF,
          this.dishForm.value.typeF
        )
        .subscribe((dishes: any) => {
          this.dishResults = dishes['results'];
          console.log(dishes['results']);
        });
    });
  }

  ngOnInit(): void {}
}
