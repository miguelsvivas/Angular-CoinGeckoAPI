import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-trending-coins',
  templateUrl: './trending-coins.component.html',
  styleUrls: ['./trending-coins.component.css']
})
export class TrendingCoinsComponent implements OnInit {

  public coins !: any[];

  public data !: any[];

  constructor(private coinService:CoinService) { }





  ngOnInit(): void {

    this.getTrendingcoins();
  }

  

  getTrendingcoins(){
    this.coinService.getTrendingCoins().subscribe(response =>{
     console.log(response)
     this.coins = Object.values(response);
      this.data = this.coins[0];
      console.log(this.data)
    })
  }

}
