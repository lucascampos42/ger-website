import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {SectionBlogComponent} from "./components/section-blog/section-blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SectionBlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
