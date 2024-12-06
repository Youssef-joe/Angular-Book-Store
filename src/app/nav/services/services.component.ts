import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  product: any = [];

  constructor(private apiServices: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.fetchingProducts()
  }

  fetchingProducts (): void {
    this.apiServices.getListProducts().subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (er) => {
        console.error("Error Fetching Products: ", er);
      }
    });
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId])
  }
}
