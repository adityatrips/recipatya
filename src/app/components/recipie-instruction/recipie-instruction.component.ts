import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipie-instruction',
  templateUrl: './recipie-instruction.component.html',
  styleUrls: ['./recipie-instruction.component.scss'],
})
export class RecipieInstructionComponent implements OnInit {
  constructor(
    private http: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  steps: string[] = [];
  current: number = 0;
  index: string = '';

  nutrientInfo: string[] = [];

  pre(): void {
    this.current -= 1;
    this.index = this.steps[this.current];
    console.log(this.steps);
  }
  next(): void {
    this.current += 1;
    this.index = this.steps[this.current];
    console.log(this.steps);
  }
  done(): void {
    console.log('done');
  }

  recipieInfo: any = {};

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(() => {
      this.http
        .getRecipieInformation(this.activatedRoute.snapshot.params['id'], true)
        .subscribe((recipie) => {
          this.recipieInfo = recipie;
          console.log(recipie);

          this.recipieInfo.analyzedInstructions[0].steps.map((s: object) => {
            Object.entries(s).forEach(([key, val]) => {
              if (key === 'step') {
                this.steps.push(val);
              }
            });
          });

          this.recipieInfo.nutrition.nutrients.map((nutrient: any) => {
            Object.entries(nutrient).map((nutrient) => {
              Object.values(nutrient).forEach((val: any) => {});
            });
          });
          console.log(this.nutrientInfo);

          this.index = this.steps[0];
        });
    });
  }
}
