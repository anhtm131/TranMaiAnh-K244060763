import { Component, OnInit } from '@angular/core';
import { FakeProduct2Service } from '../services/fake-product2-service';

@Component({
  selector: 'app-fake-product2-component',
  standalone: false,
  styleUrl: './fake-product2-component.css',
  templateUrl: './fake-product2-component.html',
})
export class FakeProduct2Component implements OnInit {
  data: any;
  errMessage: string = '';

  constructor(private _service: FakeProduct2Service) {}

  ngOnInit(): void {
    this._service.getFakeProductData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
