import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Coin } from '../Coin';



@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http:HttpClient) { }


  public getCoins(): Observable<Coin[]>{

  return this.http.get<Coin[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
   
  }

}
