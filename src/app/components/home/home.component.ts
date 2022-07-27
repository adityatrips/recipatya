import { RandomRecipie } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipie: any = {};

  constructor(private http: ApiService) {}

  ngOnInit(): void {
    this.http.getRandomRecipie().subscribe((recipie) => {
      this.recipie = recipie;
      console.log(recipie);
    });
  }
}
