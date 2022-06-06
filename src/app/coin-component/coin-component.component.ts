import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../Coin';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-coin-component',
  templateUrl: './coin-component.component.html',
  styleUrls: ['./coin-component.component.css']
})
export class CoinComponentComponent implements OnInit {

  

  constructor(private router:Router,private route:ActivatedRoute,private coinService:CoinService) { 

  }




  id!:string;
  
  moneda!: Coin;

  name!:string;

  image !: string ;

  symbol!:string;

  categories : [] = [];

  description !: string;

  rank !: number;

  homepage !:string;

  price !:number;

  low_price !: number;
  
  high_price !:number;


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.coinService.getCoin(this.id).subscribe(
      respuesta => {
      console.log(respuesta)
      this.name = respuesta.name
      this.image = respuesta.image.large;
      this.symbol = respuesta.symbol;
      this.categories = respuesta.categories;
      this.description = respuesta.description.en;
      this.rank = respuesta.market_cap_rank;
      this.homepage = respuesta.links.homepage[0];
      this.price = respuesta.market_data.current_price.usd;
      this.low_price = respuesta.market_data.low_24h.usd;
      this.high_price = respuesta.market_data.high_24h.usd;
    });
  }


  // high 

  // low 24

}
