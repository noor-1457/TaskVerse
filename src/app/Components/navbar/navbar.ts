import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  navItems = [
    { name: 'Home', link: '/' },
    { name: 'Todo', link: '/todo' },
    { name: 'Calculator', link: '/calculator' },
    { name: 'Weather', link: '/weather' },
    { name: 'Settings', link: '/settings' },
  ];

}
