import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Coin } from '../Coin';



@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http:HttpClient) { }


  public getCoins(){

    
  }
}
