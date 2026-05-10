import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todo } from './todo/todo';
import { Calculator } from './calculator/calculator';
import { Weather } from './weather/weather'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'todo', component: Todo },
  {
    path: 'calculator',
    component: Calculator,
  },
   {
    path: 'weather',
    component: Weather,
  },
];
