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

  


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.coinService.getCoin(this.id).subscribe(
      respuesta => {
      console.log(respuesta)
      this.name = respuesta.name
      this.image = respuesta.image.large;
      this.symbol = respuesta.symbol;
      this.categories = respuesta.categories;
    });
  }


}
