import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {

    }
  }

  fetchProductDetails( productId: string ) {
    this.http.get(`http://localhost:3000/api/books/${productId}`).subscribe({
      next: (data) => {
        this.products = data
      },
      error: (er) => {
        console.error("Error Fetching Product: ", er)
      }
    })
  }
 }
