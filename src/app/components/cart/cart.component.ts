import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItems(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems()
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, items) => total + items.price * items.quantity,
      0
    );
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}



