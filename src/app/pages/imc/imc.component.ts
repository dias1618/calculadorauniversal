import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit, AfterViewInit {

  @ViewChild('inputAltura') inputAltura:ElementRef<HTMLElement>;
  @ViewChild('inputPeso') inputPeso:ElementRef<HTMLElement>;

  altura:number;
  peso:number;
  imc:any;

  constructor(
    private _storageService:StorageService
  ) { }

  ngOnInit(){
    this._storageService.rotaAtual.next('IMC');
  }

  ngAfterViewInit(): void {
    this.inputPeso.nativeElement.focus();
  }

  onClickPeso(): void{
    this.inputAltura.nativeElement.focus();
  }

  onClickAltura(): void{
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = this.imc.toFixed(2).toString().replace('.', ',');
  }

}
