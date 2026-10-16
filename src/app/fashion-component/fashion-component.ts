import { Component, computed, signal } from '@angular/core';
import { FashionAPIService } from '../services/fashion-apiservice';
import { Fashion } from '../classes/Fashion';

@Component({
  selector: 'app-fashion-component',
  standalone: false,
  templateUrl: './fashion-component.html',
  styleUrl: './fashion-component.css',
})
export class FashionComponent {
  fashions=signal<Fashion[]>([]);
  errMessage=signal('')
  loading=signal(true)
  selectedStyle=signal('ALL')
  styles=computed(()=>['ALL',...new Set(this.fashions().map(f=>f.style))])
  filteredFashions=computed(()=>{
    if(this.selectedStyle()=='ALL') return this.fashions()
    return this.fashions().filter(f=>f.style==this.selectedStyle())
  })
  constructor(public _service: FashionAPIService){
    this._service.getFashions().subscribe({
      next:(data)=>{
        this.fashions.set(data)
        this.loading.set(false)
      },
      error:(err)=>{
        this.errMessage.set(err.message)
        this.loading.set(false)
      }
    })
  }
  selectStyle(style:string){
    this.selectedStyle.set(style)
  }
}


