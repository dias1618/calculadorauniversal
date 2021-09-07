import { Component, OnInit, Injectable, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  
  @ViewChild('navbar') navbar:ElementRef<HTMLElement>;


  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private _storageService:StorageService
  ) { }

  ngAfterViewInit() {

    this._storageService.rotaAtual.subscribe(rota => {
      let lists:HTMLCollection = this.navbar.nativeElement.children;
      for(let i=0; i < lists.length; i++){
        let child:Element|null|undefined = lists.item(i)?.firstElementChild;
        if(child?.textContent == rota)
          lists.item(i)?.firstElementChild?.classList.add('active');
        else
          lists.item(i)?.firstElementChild?.classList.remove('active');
      }
    });

    
  }

  onLogout(){
    
  }

  changePage(indexPage:number, path:string){
    let lists:HTMLCollection = this.navbar.nativeElement.children;
    for(let i=0; i < lists.length; i++){
      if(i === indexPage)
        lists.item(i)?.firstElementChild?.classList.add('active');
      else
        lists.item(i)?.firstElementChild?.classList.remove('active');
    }

    this.router.navigate([path], {
      relativeTo: this.activatedRoute.root
    })
  }

}
