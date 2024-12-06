import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  // adding item to cart
  addToCart(product: any):void {
    const item = this.cart.find((p) => {p.id === product.id})
    if (item) 
    {
      item.quantity += 1;
    } else {
      this.cart.push({...product, quantity: 1})
    }
  }

  getCartItems ():any[] {
    return this.cart;
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((p) => p.id !== productId)
  }

  clearCart(): void {
    this.cart = [];
  }
  
}
