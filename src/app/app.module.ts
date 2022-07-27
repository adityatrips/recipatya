import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ngZorroModule } from './ngZorroModule';
import { HomeComponent } from './components/home/home.component';
import { RecipieCardComponent } from './components/recipie-card/recipie-card.component';
import { RecipieInstructionComponent } from './components/recipie-instruction/recipie-instruction.component';
import { ViewRecipiesComponent } from './components/view-recipies/view-recipies.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, RecipieCardComponent, RecipieInstructionComponent, ViewRecipiesComponent, FourOfourComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ngZorroModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
