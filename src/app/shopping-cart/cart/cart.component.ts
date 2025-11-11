import { Component, OnInit } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service'; // ✅ import your service

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // ✅ fixed property name ("styleUrls" not "styleUrl")
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // ✅ Load items from CartService
  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // ✅ Remove a specific item
  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.loadCart(); // refresh cart after removal
  }

  // ✅ Clear entire cart
  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }
}
