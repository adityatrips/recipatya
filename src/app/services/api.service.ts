import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipie, RecipieInformation, RandomRecipie } from '../models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getRecipie(
    cuisine: string,
    exludeCuisine?: string,
    diet?: string,
    intolerances?: string,
    type?: string
  ): Observable<Recipie[]> {
    return this.http.get<Recipie[]>(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&cuisine=${cuisine}&exludeCuisine=${exludeCuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}`
    );
  }

  getRecipieInformation(
    recipieId: number,
    includeNutrition: boolean
  ): Observable<RecipieInformation> {
    return this.http.get<RecipieInformation>(
      `https://api.spoonacular.com/recipes/${recipieId}/information?apiKey=${this.apiKey}&includeNutrition=${includeNutrition}`
    );
  }

  getRandomRecipie(): Observable<RandomRecipie> {
    return this.http.get<RandomRecipie>(
      `https://api.spoonacular.com/recipes/random?apiKey=${this.apiKey}`
    );
  }
}
