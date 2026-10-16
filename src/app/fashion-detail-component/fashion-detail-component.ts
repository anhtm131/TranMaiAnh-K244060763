import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { extractIdFromSlug } from '../classes/slug-helper';

@Component({
  selector: 'app-fashion-detail-component',
  standalone: false,
  templateUrl: './fashion-detail-component.html',
  styleUrl: './fashion-detail-component.css',
})
export class FashionDetailComponent implements OnInit {
  fashion=signal<Fashion|null>(null);
  errMessage=signal('')
  loading=signal(false)
  hasSlug=signal(false)
  constructor(private _service: FashionAPIService,
    private router: Router,
    private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param)=>{
      const slug=param.get('slug')
      this.hasSlug.set(slug!=null)
      if(slug!=null){
        this.loadFashion(slug)
      }
    })
  }

  loadFashion(slug:string){
    this.fashion.set(null)
    this.errMessage.set("")
    let idf=extractIdFromSlug(slug,"f")
    if(idf==null && !isNaN(Number(slug))){
      idf=parseInt(slug)
    }
    if(idf==null){
      this.errMessage.set("Slug không hợp lệ: "+slug)
      return
    }
    this.loading.set(true)
    this._service.getFashionByIdF(idf).subscribe({
      next:(data)=>{
        this.loading.set(false)
        if(data==null){
          this.errMessage.set("Không tìm thấy Fashion có IdF = "+idf)
          return
        }
        this.fashion.set(data)
        if(data.getSlug()!=slug){
          this.router.navigate(['/fashion-detail',data.getSlug()],{replaceUrl:true})
        }
      },
      error:(err)=>{
        this.loading.set(false)
        this.errMessage.set(err.message)
      }
    })
  }

  searchFashion(keyword:string){
    keyword=keyword.trim()
    if(keyword!=""){
      this.router.navigate(['/fashion-detail',keyword])
    }
  }

  goBack(){
    this.router.navigate(['/fashion-list'])
  }
}


