import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _storageService:StorageService
  ) { }

  ngOnInit(){
    this._storageService.rotaAtual.next('Home');
  }

}
