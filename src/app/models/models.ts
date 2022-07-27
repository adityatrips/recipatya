export interface Recipie {
  offset: number;
  number: number;
  results: Object[];
  totalResults: number;
}

export interface RecipieInformation {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  dishTypes: string[];
  extendedIngredients: object[];
  summary: string;
  winePairing: {
    pairedWines: string[];
    pairingText: string;
    productMatches: object[];
  };
}

export interface RandomRecipie {
  recipies: object[];
}
