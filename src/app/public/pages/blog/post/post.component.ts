import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BlogService} from "../../../../services/blog.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {SectionBlogComponent} from "../../home/components/section-blog/section-blog.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    RouterLink,
    SectionBlogComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);

  postTitle = signal('');
  postContent = signal<SafeHtml | null>(null);
  postId = signal<number>(Number(this.route.snapshot.paramMap.get('id') ?? 0))

  ngOnInit(): void {
    this.loadPost();
  }

  private loadPost(): void {
    if (!this.postId()) {
      console.error('ID inválido ou não encontrado na URL');
      return;
    }

    this.blogService.getPostById(this.postId()).subscribe({
      next: (post) => {
        this.postTitle.set(post.title.rendered.replace(/&nbsp;/g, ' '));
        const sanitizedContent = post.content.rendered.replace(/&nbsp;/g, ' ');
        this.postContent.set(this.sanitizer.bypassSecurityTrustHtml(sanitizedContent));
      },
      error: (err) => console.error('Erro ao carregar o post:', err)
    });
  }

  refreshPost() {
    this.postId.set(Number(this.route.snapshot.paramMap.get('id') ?? 0));
    this.loadPost()
  }
}
