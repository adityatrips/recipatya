import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { ViewRecipiesComponent } from './components/view-recipies/view-recipies.component';
import { RecipieInstructionComponent } from './components/recipie-instruction/recipie-instruction.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipie/:id',
    component: RecipieInstructionComponent,
  },
  {
    path: 'recipies',
    component: ViewRecipiesComponent,
  },
  {
    path: '**',
    component: FourOfourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
