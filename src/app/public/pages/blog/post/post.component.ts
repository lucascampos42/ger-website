import {Component, inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../../services/blog.service";
import {DomSanitizer, SafeHtml, Meta, Title} from "@angular/platform-browser";
import {SectionBlogComponent} from "../../home/components/section-blog/section-blog.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    SectionBlogComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);
  private meta = inject(Meta);
  private titleService = inject(Title);

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
        const title = post.title.rendered.replace(/&nbsp;/g, ' ');
        this.postTitle.set(title);

        // SEO Updates
        this.titleService.setTitle(title);
        this.meta.updateTag({ name: 'description', content: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || title });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || title });

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
