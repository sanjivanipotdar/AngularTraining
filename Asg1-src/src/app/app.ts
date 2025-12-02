import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports:[CurrencyPipe,CounterComponent,ProductDetailsComponent],
    styleUrl: './app.css'
})
export class App {
  
  title="Transflower";
  price=45;

}
