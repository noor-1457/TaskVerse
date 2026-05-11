import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideMenu, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  LucideMenu = LucideMenu;

  navItems = [
    { name: 'Home', link: '/' },
    { name: 'Todo', link: '/todo' },
    { name: 'Calculator', link: '/calculator' },
    { name: 'Weather', link: '/weather' },
    // { name: 'Settings', link: '/settings' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
