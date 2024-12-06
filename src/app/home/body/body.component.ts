import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  products: any[] = [];

  constructor(private apiServices: ApiServiceService) {}

  ngOnInit(): void {
    this.apiServices.getProducts().subscribe({
      next: (data) => {
        this.products = data.slice(1, 9);
      },
      error: (err) => {
        console.error('Error Fetching Products: ', err);
      },
    });
  }
}
