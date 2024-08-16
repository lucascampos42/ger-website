import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <app-header [class]="[headerClass()]"/>
      <router-outlet />
    <app-footer />
  `,
  styles: '',
})
export class PublicComponent {
  protected headerClass = signal('')

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_: any) {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY >= 100 && scrollY < 200) {
      this.headerClass.update(() => 'scape')
    } else if(scrollY >= 200) {
      this.headerClass.update(() => 'fixed')
    } else {
      this.headerClass.update(() => '')
    }
  }
}
