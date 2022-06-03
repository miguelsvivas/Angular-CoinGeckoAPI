import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coin } from './Coin';
import { CoinService } from './services/coin.service';


// interface Coin{
//   id: string;
//   name: string;
//   symbol: string;
//   image: string;
//   current_price: number;
//   price_change_percentage_24h : number;
//   total_volume: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  coins: Coin[]=[];

  filteredCoins: Coin[]=[];

  titles : string[] = [
    '#',
     'Coin',
     'Price',
     'Price Change',
     '24h Volume'
  ];

  searchText = "";

  constructor(private http:HttpClient,private coinService :CoinService){}


  searchCoin(){
   this.filteredCoins =  this.coins.filter((coin) => 
    coin.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  ngOnInit(): void {
    // this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // .subscribe( 
    //   response => {
    //   console.log(response);
    //   this.coins = response;
    //   this.filteredCoins = response;
    // },
    // (err) => console.log(err)
    // )
    this.obtenerMonedas();
   // throw new Error('Method not implemented.');
  }

  public obtenerMonedas(){
    this.coinService.getCoins().subscribe( 
      response => {
      console.log(response);
      this.coins = response;
      this.filteredCoins = response;
    },
    (err) => console.log(err)
    )

    
  }

}
