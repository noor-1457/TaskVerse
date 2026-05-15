import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Todo } from './todo/todo';
import { Navbar } from './Components/navbar/navbar';
// import { Home } from './home/home';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Collection');
}
