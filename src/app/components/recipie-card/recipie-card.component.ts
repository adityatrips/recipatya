import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-card',
  templateUrl: './recipie-card.component.html',
  styleUrls: ['./recipie-card.component.scss'],
})
export class RecipieCardComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() imageUrl: string = '';
  @Input() servesNumber: number = 0;
  @Input() readyInMinutes: string = '';
  @Input() likes: number = 0;
  @Input() pricePerServe: number = 0;
  @Input() recipieId: number = 0;

  constructor() {}

  redirectToInfo() {}

  ngOnInit(): void {}
}
