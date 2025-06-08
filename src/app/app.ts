import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Order } from './components/order/order';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ecommerce';
}
