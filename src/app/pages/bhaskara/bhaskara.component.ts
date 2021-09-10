import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-bhaskara',
  templateUrl: './bhaskara.component.html',
  styleUrls: ['./bhaskara.component.scss']
})
export class BhaskaraComponent implements OnInit {

  valorA:number;
  valorB:number;
  valorC:number;
  valorRaizes:string;

  constructor(
    private _storageService:StorageService
  ) { }

  ngOnInit(): void {
    this._storageService.rotaAtual.next('Bhâskara');
  }

  
  async changeValor($event:any){
    if(this.valorA && this.valorB && this.valorC){
      
      let delta = this.valorB * this.valorB - 4 * this.valorA * this.valorC;
      console.log(delta)
      console.log(Math.sqrt(delta))
      console.log((-1 * this.valorB + Math.sqrt(delta)))
      console.log((2 * this.valorA))
      let raiz1 = (-1 * this.valorB + Math.sqrt(delta)) / (2 * this.valorA);
      let raiz2 = (-1 * this.valorB - Math.sqrt(delta)) / (2 * this.valorA);

      this.valorRaizes = `${raiz1}, ${raiz2}`;
      
    }
  }


}
