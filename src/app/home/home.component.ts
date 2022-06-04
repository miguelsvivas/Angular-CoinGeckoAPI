import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coin } from '../Coin';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coins: Coin[]=[];


      //Paginacion
      config!:any;

      collection = {count: 100,  filteredCoins: [] as Coin[]}

      searchText = "";

      

  titles : string[] = [
    '#',
     'Coin',
     'Price',
     'Price Change',
     '24h Volume'
  ];


  constructor(private http:HttpClient,private coinService :CoinService) { }

  ngOnInit(): void {

    
    this.obtenerMonedas();


   
   this.config = {
    itemsPerPage : 12,
    currentPage: 1,
    totalItems: this.collection.count
  }
  }

  pageChanged(event:number){
    this.config.currentPage = event;
  }
  
  searchCoin(){
    this.collection .filteredCoins =  this.coins.filter((coin) => 
     coin.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
     coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
     );
   }
  
    public obtenerMonedas(){
      this.coinService.getCoins().subscribe( 
        response => {
        console.log(response);
        this.coins = response;
        this.collection.filteredCoins = response;
      },
      (err) => console.log(err)
      )
      
    }



  }


 


