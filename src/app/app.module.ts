import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoinComponentComponent } from './coin-component/coin-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingCoinsComponent } from './trending-coins/trending-coins.component';

const appRoutes:Routes=[

  {path: '', component:HomeComponent},
  {path: 'coin/:id', component:CoinComponentComponent},
  {path: 'trending', component:TrendingCoinsComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    CoinComponentComponent,
    HomeComponent,
    TrendingCoinsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
