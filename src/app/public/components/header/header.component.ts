import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  protected router = inject(Router);
  protected modalOpen = signal(false)

  currentPath!: string

  ngOnInit(): void {
    this.handleRouteEvents()
    this.currentPath = this.router.url
  }

  toggleModal(): void {
    this.modalOpen.update(value => !value)
  }

  async navigate(section: string) {
    this.modalOpen.update(() => false)
    this.router.navigate([section])
  }

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url
      }
    });
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
