import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'] // ✅ plural
})
export class ItemComponent {
  @Input() item!: Item;
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    if (this.item) {
      // Ensure we match model property names
      this.cartService.addToCart({ ...this.item, quantity: this.quantity });
      alert(`${this.item.title} added to cart!`);
      this.quantity = 1;
    }
  }
}
