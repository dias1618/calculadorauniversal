import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import axios from 'axios';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.scss']
})
export class CambioComponent implements OnInit {

  @ViewChild('moedaOrigem') moedaOrigem:MatSelect;
  @ViewChild('moedaDestino') moedaDestino:MatSelect;
  valorMoedaOrigem:number;
  valorMoedaDestino:number;

  moedas:{value:string, label:string}[];

  constructor(
    private _storageService:StorageService
  ) { }

  async ngOnInit() {
    this._storageService.rotaAtual.next('Câmbio');
    this.moedas  = [
      {value: 'USD', label: 'Dólar americano'},
      {value: 'EUR', label: 'Euro'},
      {value: 'GBP', label: 'Libra Esterlina'},
      {value: 'ARS', label: 'Peso Argentino'},
      {value: 'BRL', label: 'Real'},
      {value: 'BRLT', label: 'Real Turismo'},
    ];
  }

  async changeValor($event:any){
    if(this.moedaOrigem.value && this.moedaDestino.value && this.valorMoedaOrigem){
      try {
        const { data } = await axios.get(`https://economia.awesomeapi.com.br/json/last/${this.moedaOrigem.value}-${this.moedaDestino.value}`);
        this.valorMoedaDestino = Number((this.valorMoedaOrigem * data[`${this.moedaOrigem.value}${this.moedaDestino.value}`].high).toFixed(2));
      } catch (error) {
        
      }
    }
  }

}
